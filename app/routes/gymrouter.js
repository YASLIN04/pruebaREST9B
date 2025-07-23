const express = require('express');
const router = express.Router();
const ejerciciocontroller = require('../controllers/ejerciciocontroller');
const ejercicio = require('../models/ejerciciosmodel');

router
  .get('/ejercicios', ejerciciocontroller.buscarTodo)
  .post('/ejercicios', ejerciciocontroller.guardarEjercicio)
  .get('/ejercicios/:key/:value', ejerciciocontroller.buscarEjercicio, ejerciciocontroller.mostrarEjercicio)
  .delete('/ejercicios/:key/:value', ejerciciocontroller.buscarEjercicio, ejerciciocontroller.eliminarEjercicio)
  .put('/ejercicios/:key/:value', ejerciciocontroller.buscarEjercicio, ejerciciocontroller.actualizarEjercicio);

module.exports = router;
