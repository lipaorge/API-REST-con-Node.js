// dependencias
const mongoose = require('mongoose');
const url = 'mongodb://localhost/api_mongo';

// conexion a la base de datos
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.log(`Error al conectar a la base de datos: ${err}`));

// exportar la conexion
module.exports = mongoose;