const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nombre: String,
  sector: String,
  direccion: String,
  latitud: Number,
  longitud: Number
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa;
