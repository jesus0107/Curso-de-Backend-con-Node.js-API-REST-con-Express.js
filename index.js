const express = require('express');
const faker = require('faker')

const app = express();
const port =  3000

app.get("/", (req, res) => {
    res.send("Primer servidor en express");
})

// ----- Get all products
app.get("/products", (req, res) => {
    const products = []
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.price),
            image: faker.image.imageUrl()
        });
    }
    res.json(products)
});

// ---- Get a product
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Produc 1",
        price: 1000
    });
})

// ---- Query Params
app.get("/users", (req, res) => {
    const { limit, offset } = req.query;
    if ( limit && offset ){
        res.json({
            limit,
            offset
        });
    }
    res.send("No hay parametros");
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});
