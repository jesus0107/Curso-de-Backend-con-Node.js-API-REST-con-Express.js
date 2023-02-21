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
