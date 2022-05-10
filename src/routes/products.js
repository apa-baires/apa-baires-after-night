
const productsControllers = require('./../controllers/productsControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', productsControllers.homeTelos)
router.get('/create', productsControllers.createTelos)
router.get('/list', productsControllers.comunasByIdC)
// router.get('/local-:idLocal/:idRooms', productsController.detallesR)
// router.get('/CABA', productsController.listCABA)
module.exports = router



