const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

// Ruta 1: JSON con id, nombre, altura, habilidad y containerId
router.get('/api', pokeneaController.getPokeneaJSON);
router.get('/api/pokenea', pokeneaController.getPokeneaJSON);
router.get('/pokenea', pokeneaController.getPokeneaJSON);

// Ruta 2: Pantalla HTML con imagen, frase filosófica y containerId
router.get('/', pokeneaController.getPokeneaView);
router.get('/view', pokeneaController.getPokeneaView);

module.exports = router;

