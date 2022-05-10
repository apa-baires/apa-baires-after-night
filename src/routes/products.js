
const productsControllers = require('./../controllers/productsControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', productsControllers.homeTelos)
router.get('/create', productsControllers.createTelos)
router.get('/comuna-:idC', productsControllers.detailsByIdC)
router.get('/details/:idE', productsControllers.detailsByIdE)
// router.get('/CABA', productsController.listCABA)
module.exports = router



