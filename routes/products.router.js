const express = require('express');

const ProductsService = require('../services/product.service')

const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema')

const router = express.Router()
const service = new ProductsService()

// ---- Get all products
router.get(
    "/",
    async (req, res) => {
        const products = await service.find()
        res.json(products)
    }
);

// ---- Get a product
router.get(
    "/:id",
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.findOne(id);
            res.json(product)
        } catch (error) {
            next(error);
        }
    }
);

// ---- Create a product
router.post(
    '/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
        const dataBody = req.body;
        const addProduct = await service.create(dataBody)
        res.status(201).json(addProduct)
    }
);

// ---- Update product
router.patch(
    "/:id",
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const productUpdate = await service.update(id, data)
            res.json({
                message: "Update product",
                data: productUpdate,
                id
            })
        } catch (error) {
            next(error)
        }
    }
);

// ---- Delete product
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const productDeleted = await service.delete(id)
    res.json({
        message: "Delete product",
        productDeleted
    })
})



module.exports = router;
