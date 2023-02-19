const express = require('express');
const faker = require('faker')

const router = express.Router();

// ---- Get all categories
router.get('/', (req, res) => {
    res.json([
        {
            categorie: faker.commerce.productAdjective(),
        },
        {
            categorie: faker.commerce.productAdjective(),
        },
        {
            categorie: faker.commerce.productAdjective(),
        },
    ])
})

// ---- Get a categorie by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json([
        {
            id,
            categorie: faker.commerce.productAdjective(),
        },
    ])
})

module.exports =  router;
