const express = require('express')

class Server {
    constructor(){
        this._app = express()
        this.routes()
    }

    routes(){
        this._app.get('/',require('../routes/pacienteRoutes'))
        
    }

    listen(){
        this._app.listen(3000,()=>{
            console.log('Escuchando por el puerto 3000 ');
        })
        
    }
}

module.exports = Server