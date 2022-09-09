// dependencias
const express = require('express');
const app = express();

// database
const db = require('./config/db');

// Usamos la plantilla
app.set('view engine', 'ejs');

// json y urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// especificar la carpeta publica
app.use(express.static('public'));

// rutas
const index = require('./routes/index');
app.use('/', index);
const usuarios = require('./routes/usuarios');
app.use('/usuarios', usuarios);

// listener puerto 4000
app.listen(4000, () => {
    console.log('Servidor OK en http://localhost:4000');
});