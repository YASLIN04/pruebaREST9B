const ejercicioModel = require('../models/ejerciciosmodel.js')

function buscarTodo(req, res){
    ejercicioModel.find({})
    .then(ejercicios=>{
        if(ejercicios.length){
            return res.status(200).send({ejercicios})
        }
        return res.status(204).send({mensaje:"No hay información que mostrar"})
    })
    .catch(e=>{return res.status(404).send({mensaje:`No hay información que mostrar ${e}`})})
}

module.exports = {
    buscarTodo
}