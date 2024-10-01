const { Router} = require('express')
const {getall, getById, insert, update, deleteById} = require('../controller/pacienteController.js')

const router = Router()

router.get('/',getall)
router.get('/:id', getById)
router.post('/',insert)
router.put('/',update)
router.delete('/:id',deleteById)


module.exports = router