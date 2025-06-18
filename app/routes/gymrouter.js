const express = require('express')
const router = express.Router()

//router.post archivo aparte
//router.get liga completa en el buscador

router.get('/ejercicios', (req, res)=>{
    res.json({mensaje: "❤️Hola mundo❤️"})
})

module.exports=router