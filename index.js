const express = require('express');
const app = express();
const port =  3000

app.get("/", (req, res) => {
    res.send("Primer servidor en express");
})

app.get("/nueva-ruta", (req, res) => {
    res.send("Otra ruta");
})

app.get("/enviando-json", (req, res) => {
    res.json({
        name: "Produc 1",
        price: 1000
    });
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});
