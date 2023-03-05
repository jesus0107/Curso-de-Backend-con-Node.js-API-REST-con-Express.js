const express = require('express');
const routerApi = require('./routes/index')
const cors =  require('cors')
const app = express();
const port =  3000

const { boomErrorHandler, logError, errorHandler } = require('./middlewares/error.handler')

const whiteList = ["http://127.0.0.1:5500/", "https://mydomain.com"]
const corsOptions = {
    origin: (origin, callback) =>{
        if (whiteList.includes(origin) || !origin ){
            callback(null, true)
        } else {
            callback(new Error("No permitido"))
        }
    }
}

app.use(express.json())
app.use(cors(corsOptions))
routerApi(app)

app.get("/", (req, res) => {
    res.send("Primer servidor en express");
})

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});
