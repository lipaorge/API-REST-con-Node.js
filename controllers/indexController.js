// requerir el modelo de usuario
const express = require('express');

/**
 * Mostrar todos los usuarios
 * @param {*} req 
 * @param {*} res 
 */
module.exports.mostrarIndex = (req, res) => {
    return res.render('index');
}