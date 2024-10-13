const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const dotenv = require('dotenv');

// Configure environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Usar rutas
app.use('/api', studentRoutes);

// API route
app.get('/', (req, res) => {
  res.send('API de Ylla Perú funcionando');
});

// Conectar a MongoDB y iniciar servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.log(err));