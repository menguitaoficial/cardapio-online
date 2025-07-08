const Restaurante = require('../models/Restaurante');

exports.getAll = async (req, res) => {
  const restaurantes = await Restaurante.find();
  res.json(restaurantes);
};

exports.create = async (req, res) => {
  const novo = await Restaurante.create(req.body);
  res.status(201).json(novo);
};

// update e delete omitidos por brevidade
