const mongoose = require('mongoose');

const pratoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante' }
});

module.exports = mongoose.model('Prato', pratoSchema);
