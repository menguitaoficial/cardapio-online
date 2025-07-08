const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  pratos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prato' }],
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
