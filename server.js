const app = require('./app/app')
const config = require('./app/config/configuracion')
const conexión = require('./app/config/conexion')

conexión.connect();

app.listen(config.PORT,()=>{
    console.log ("aplicacion corriendo en puerto", 
        config.PORT);
})