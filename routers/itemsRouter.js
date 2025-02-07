const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/itemsController');

// Rota GET para listar itens
router.get('/', getItems);

module.exports = router;
