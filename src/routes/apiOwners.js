const ownersControllers = require('../controllers/ownersControllers.js');
const express = require('express');
const router = express.Router();

router.get('/', ownersControllers.loginOwners);
router.get('/dashOwners', ownersControllers.dashOwners);
router.get('/home', ownersControllers.homeOwners);
router.get('/empresas', ownersControllers.tableOwners);
router.get('/empresas/:idE', ownersControllers.getByIdE)
//router.get('/forms/formRooms', ownersControllers.roomsOwners)

module.exports = router;
