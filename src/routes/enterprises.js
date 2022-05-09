const enterprisesControllers = require('../controllers/enterprisesControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', enterprisesControllers.login)
router.get('/club', enterprisesControllers.clubE)
router.get('/cadastro', enterprisesControllers.register)
router.post('/cadastro', enterprisesControllers.storage)
module.exports = router