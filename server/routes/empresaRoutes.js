
const express = require('express');
const Empresa = require('../models/Empresa');
const router = express.Router();

// Obtener todas las empresas
router.get('/', async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Añadir una nueva empresa
router.post('/', async (req, res) => {
    const { nombre, sector, direccion, latitud, longitud } = req.body;
    const nuevaEmpresa = new Empresa({ nombre, sector, direccion, latitud, longitud });
    try {
        await nuevaEmpresa.save();
        res.status(201).json(nuevaEmpresa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
