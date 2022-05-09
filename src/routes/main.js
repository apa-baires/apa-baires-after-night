const mainControllers = require('./../controllers/mainControllers.js');
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainControllers.index);
// router.get('/home', mainController.landingUser);
// router.get('/usuarios/crearCuenta', mainController.crearCuenta);
// router.get('/usuarios/login', mainController.iniciarSeccion);
module.exports = router;
