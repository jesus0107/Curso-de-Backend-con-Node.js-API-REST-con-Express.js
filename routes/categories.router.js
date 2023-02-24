const express = require('express');
// const faker = require('faker')

const CategoriesService = require('../services/categories.service')

const router = express.Router();
const service = new CategoriesService()

// ---- Get all categories
router.get('/', (req, res) => {
    const categories = service.find()
    res.json(categories)
})

// ---- Get a categorie by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const categorie = service.findOne(id)
    res.json(categorie)
})

module.exports =  router;
