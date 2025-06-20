const mongoose = require('mongoose');
const config = require('./configuracion');

    module.exports ={
        conection : null,
        connect : () => {
            if(this.conection) return this.conection
            return mongoose.connect(config.DB)
            .then(conn =>{
                this.conection = conn
                console.log('la conexión se realizo de manera correcta');
            })
            .catch(e => {console.log('Error en la conexón', e)})
        }
    }