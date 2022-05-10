const productsControllers = require('./../controllers/productsControllers.js');
const express = require('express');
const router = express.Router();

// ROUTER PARA COLLECCION PRODUCTS
router.get('/', productsControllers.landingProductos);
router.get('/local-:idP', productsControllers.getByID);
router.get('/CABA', productsControllers.CABA)
router.get('/CABA/Comuna-:comunaID', productsControllers.comunasP)
module.exports = router;

// RUTAS PARAMETRIZADAS
// :idProducto --> Representa PRODUCTO MOSTRADO URL CON CUALQUIER VALOR
// REACCIONA EN DIFERENTES PRODUCTOS + PARAMETER ES OBLIGATORIO
// EN CASO DE OPTATIVO COLOCAR FINAL ?
//CAPTURAR VALOR DE RUTA - PARAMS

// PROPIEDAD PARAMS --> VALOR URL
// VALOR PARAMS --> NOMBRE PRODUCTO A MOSTRAR
