const fs = require('fs')
const readline = require('readline');
const Paciente = require('../models/paciente');

const findAllPaciente = async () => {
    const arregloPacientes= []
    const fileStream = fs.createReadStream('./data/pacientes.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const arreglolinea = line.split(',')
        const paciente = new Paciente(arreglolinea[0],arreglolinea[1],arreglolinea[2],arreglolinea[3],arreglolinea[4],arreglolinea[5])
        arregloPacientes.push(paciente)
    }
    return arregloPacientes

}

const findById = async (id) => {
    const arregloPacientes= []
    const fileStream = fs.createReadStream('./data/pacientes.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const arreglolinea = line.split(',')
        const paciente = new Paciente(arreglolinea[0],arreglolinea[1],arreglolinea[2],arreglolinea[3],arreglolinea[4],arreglolinea[5])
        arregloPacientes.push(paciente)
    }
    const filtro = arregloPacientes.filter((index)=>{
        return index.id == id
    })
    return filtro

}

const insert = (usuario) => {

}
const update = (usuario) => {

}

const deleteById = (id) => {

}




module.exports = { findAllPaciente, findById, insert, update, deleteById };

