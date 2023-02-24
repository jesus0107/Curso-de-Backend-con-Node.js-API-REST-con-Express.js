const express = require('express');

const ProductsService = require('../services/product.service')

const router = express.Router()
const service = new ProductsService()

// ---- Get all products
router.get("/", (req, res) => {
    const products = service.find()
    res.json(products)
});

// ---- Get a product
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product)
})

// ---- Create a product
router.post('/', (req, res) => {
    const dataBody = req.body;
    const addProduct = service.create(dataBody)
    res.status(201).json(addProduct)
})

// ---- Update product
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const productUpdate = service.update(id, data)
    res.json({
        message: "Update product",
        data: productUpdate,
        id
    })
})

// ---- Delete product
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const productDeleted = service.delete(id)
    res.json({
        message: "Delete product",
        productDeleted
    })
})

module.exports = router;
