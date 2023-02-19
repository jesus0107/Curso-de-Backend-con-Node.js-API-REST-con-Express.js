const express = require('express');
const faker = require('faker')

const router = express.Router()

// ---- Get all products
router.get("/", (req, res) => {
    const products = []
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }
    res.json(products)
});

// ---- Get a product
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id === "999"){
        res.status(404).json(
            {
                massage: "Product not found"
            }
        )
    } else {
        res.json({
            id,
            name: "Produc 1",
            price: 1000
        });
    }
})

// ---- Create a product
router.post('/', (req, res) => {
    const dataBody = req.body;
    res.status(201).json({
        messaje: "Created product",
        data: dataBody
    })
})

// ---- Update product
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({
        message: "Update product",
        data: data,
        id
    })
})

// ---- Delete product
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Delete product",
        id
    })
})

module.exports = router;
