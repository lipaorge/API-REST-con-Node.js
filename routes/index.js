// dependencias
const express = require('express');
const router = express.Router();

// requerir el controlador de usuarios
const indexController = require('../controllers/indexController');

// Rutas
router.get('/', indexController.mostrarIndex);

// exportar el router
module.exports = router;