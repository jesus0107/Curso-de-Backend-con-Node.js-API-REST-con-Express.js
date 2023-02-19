const express = require('express');
const app = express();
const port =  3000

app.get("/", (req, res) => {
    res.send("Primer servidor en express");
})
// ----- Get all products
app.get("/products", (req, res) => {
    res.json([
        {
            name: "Produc 1",
            price: 1000
        },
        {
            name: "Produc 1",
            price: 1000
        },
        {
            name: "Produc 1",
            price: 1000
        },
    ]);
})

// ---- Get a product
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Produc 1",
        price: 1000
    });
})



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});
