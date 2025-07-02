const express = require('express')
const router = express.Router()
const ejerciciocontroller = require('../controllers/ejerciciocontroller')

router.get('/ejercicios', ejerciciocontroller.buscarTodo)

module.exports=router
