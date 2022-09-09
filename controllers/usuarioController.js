// requerir el modelo de usuario
const Usuario = require('../models/Usuario');
const express = require('express');

/**
 * Mostrar todos los usuarios
 * @param {*} req 
 * @param {*} res 
 */
module.exports.mostrarUsuarios = (req, res) => {
    Usuario.find({}, 
        (err, usuarios) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Error al mostrar los usuarios'
                })
            }
            return res.render('usuarios/index', { usuarios: usuarios });
        }
    );
}

/**
 * Crear un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 */
module.exports.crearUsuario = (req, res) => {
    // crear un nuevo usuario
    const usuario = new Usuario(req.body);
    usuario.save((err, usuario) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Error al crear el usuario'
            })
        }
        return res.redirect('/usuarios');
    });
}

/**
 * Actualizar un usuario
 * @param {*} req 
 * @param {*} res 
 */
module.exports.actualizarUsuario = (req, res) => {
    const id = req.body.idUsuario;
    const nombre = req.body.nombre;
    const email = req.body.email;
    const estado = req.body.estado;    
    Usuario.findByIdAndUpdate(id, { nombre: nombre, email: email, estado: estado }, (err, usuario) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Error al actualizar el usuario'
            })
        }               
        return res.redirect('/usuarios');
    });
}

// eliminar un usuario por su id
module.exports.eliminarUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndDelete(id, (err, usuario) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Error al eliminar el usuario'
            })
        }
        return res.redirect('/usuarios');
    });
}
