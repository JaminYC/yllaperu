const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Ruta para obtener todos los estudiantes
router.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
