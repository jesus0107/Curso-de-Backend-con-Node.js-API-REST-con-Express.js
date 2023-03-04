const faker = require('faker')
const boom = require('@hapi/boom')


class ProductsService {
    constructor(){
        this.products = []
        this.generate()

    }

    generate(){
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            });
        }
    }

    async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct;
    }

    find(){
        return new Promise((resolve)=>{
            resolve(this.products)
        })
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id)
        if (!product){
            throw boom.notFound("Product not found")
        }
        if (product.isBlock){
            throw boom.conflict("The product is block")
        }
        return product;
    }

    async delete(id) {
        const indexProduct = this.products.findIndex(item => item.id === id);
        if (indexProduct === -1) {
            throw boom.notFound("Product not found")
        }
        this.products.splice(indexProduct, 1);
        return { id };
    }

    async update(id, changes){
        const indexProduct = this.products.findIndex(item => item.id === id);
        if (indexProduct === -1) {
            throw boom.notFound("Product not found")
        }
        const productToUpdate = this.products[indexProduct]
        this.products[indexProduct] = {
            ...productToUpdate,
            ...changes
        }
        return this.products[indexProduct];
    }
}

module.exports = ProductsService;
