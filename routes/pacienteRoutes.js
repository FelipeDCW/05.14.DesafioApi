const { Router} = require('express')
const {getall} = require('../controller/pacienteController.js')

const router = Router()

router.get('/',getall)


module.exports = router