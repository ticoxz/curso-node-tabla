
const { options } = require('yargs');
const { crearArchivoTabla } = require('./helpers/multplicar');
const argv = require('./config/yargs');




console.clear()






crearArchivoTabla(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))