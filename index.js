const Server = require('./models/server')
const { findAllPaciente } = require('./service/pacienteService')
const server = new Server

/* findAllPaciente().then((datos)=>{
    console.log(datos);
}) */
server.listen()
