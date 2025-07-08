const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restauranteRoutes = require('./routes/restauranteRoutes');
const pratoRoutes = require('./routes/pratoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Rotas
app.use('/api/restaurantes', restauranteRoutes);
app.use('/api/pratos', pratoRoutes);
app.use('/api/pedidos', pedidoRoutes);

// Conexão com banco
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro na conexão', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
