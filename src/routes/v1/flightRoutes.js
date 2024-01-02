const express = require('express');
const router = express.Router();
const flightController = require('../../controller/flightController');

router.post('/flight',flightController.create);
router.get('/getflights',flightController.getAll);
module.exports = router;