const express = require('express');
const routerApi = require('./routes/index')

const app = express();
const port =  3000

app.use(express.json())
routerApi(app)

app.get("/", (req, res) => {
    res.send("Primer servidor en express");
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});
