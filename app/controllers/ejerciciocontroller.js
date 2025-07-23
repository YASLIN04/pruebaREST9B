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

function guardarEjercicio(req, res){
    console.log(req.body)
    new ejercicioModel (req.body).save ()
    .then (info =>{
        return res.status(200).send({mensaje: "Información guardada con exito", info})
    })

}

function buscarEjercicio(req, res, next){
    let consulta ={}
    consulta[req.params.key]=req.params.value
    ejercicioModel.find(consulta)
    .then (info =>{
        if(!info.length) return next()
            req.body.ejercicios = info
        return next()
    })
    .catch(e =>{
        req.body.e = e
        next()
    })
}

function mostrarEjercicio(req, res){
    if(req.body.e) return res.status(404).send
    ({mensaje: "Error al buscar la informacíon",
        error:req.body.e})
        if(!req.body.ejercicios) return res.status(204).send({mensaje:"No hay función que mostrar"})
        let ejercicios = req.body.ejercicios
        return res.status(200).send({ejercicios})
}

function eliminarEjercicio(req, res) {
    const ejercicio = req.body.ejercicio;
    if (!ejercicio) {
        return res.status(204).send({ mensaje: "No hay información que mostrar" });
    }
    ejercicio.remove()
        .then(info => {
            return res.status(200).send({ mensaje: "Información eliminada", info });
        })
        .catch(e => {
            return res.status(500).send({ mensaje: "Error al eliminar información", error: e });
        });
}


    function actualizarEjercicio(req, res) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;

    ejercicioModel.findOneAndUpdate(consulta, req.body, { new: true })
    .then(info => {
        if (!info) return res.status(404).send({ mensaje: "No se encontró el ejercicio a actualizar" });
        return res.status(200).send({ mensaje: "Ejercicio actualizado con éxito", info });
    })
    .catch(e => {
        return res.status(400).send({ mensaje: "Error al actualizar el ejercicio", error: e });
    });
}


module.exports = {
    buscarTodo, 
    guardarEjercicio,
    buscarEjercicio,
    mostrarEjercicio,
    eliminarEjercicio,
    actualizarEjercicio
}