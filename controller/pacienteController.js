const {findAllPaciente, findById} = require('../service/pacienteService');

const getall = (req, res)=>{
    findAllPaciente().then((datos)=>{
        res.json(datos);       
    });
}

const getById = async (req, res)=>{
    const datos = await findById(req.params.id)
    
    res.json(datos)
}

const insert = (req, res)=>{
    
}

const update = (req, res)=>{
    
}

const deleteById = (req, res)=>{
    
}

module.exports = {getall,getById, insert, update, deleteById}