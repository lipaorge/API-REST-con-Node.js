// dependencias
const express = require('express');
const router = express.Router();

// requerir el controlador de usuarios
const usuarioController = require('../controllers/usuarioController');

// Rutas
router.get('/', usuarioController.mostrarUsuarios);
router.post('/crear', usuarioController.crearUsuario);
router.post('/editar', usuarioController.actualizarUsuario);
router.get('/eliminar/:id', usuarioController.eliminarUsuario);

// exportar el router
module.exports = router;
