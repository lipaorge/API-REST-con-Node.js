// dependencias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// definir el schema
const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true},
    estado: { type: String, required: true, default: 'activo' },
    fecha_creacion: { type: Date, default: Date.now() },
    fecha_actualizacion: { type: Date, default: Date.now() }
}, { versionKey: false });

// exportar el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);