const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
  nome: String,
  endereco: String
});

module.exports = mongoose.model('Restaurante', restauranteSchema);
