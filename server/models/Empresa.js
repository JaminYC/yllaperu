// Ejemplo de modelo de Empresa
const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    sector: { type: String, required: true },
    direccion: String,
    latitud: Number,
    longitud: Number
});

module.exports = mongoose.model('Empresa', empresaSchema);
