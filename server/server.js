require('./config/config');

const express = require('express')
const mongoose = require('mongoose');
const path = require('path');

const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//HABILITAR LA CARPETA PUBLICA
app.use(express.static(path.resolve(__dirname, '../public')));


//CONFIGURACIÓN GLOBAL DE RUTAS
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useCreateIndex: true,
    useNewUrlParser: true
}, (err) => {
    if (err) throw err;

    console.log("Base de datos online");
});

mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', process.env.PORT);
})