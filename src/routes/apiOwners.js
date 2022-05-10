const ownersControllers = require('../controllers/ownersControllers.js');
const express = require('express');
const router = express.Router();

router.get('/', ownersControllers.loginOwners);
router.get('/dashOwners', ownersControllers.dashOwners);
router.get('/home', ownersControllers.homeOwners);
router.get('/overview', ownersControllers.tableOwners);
//router.get('/forms/formRooms', ownersControllers.roomsOwners)

module.exports = router;
