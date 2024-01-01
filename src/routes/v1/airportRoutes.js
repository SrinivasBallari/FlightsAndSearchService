const express = require('express');
const router = express.Router();
const airportController = require('../../controller/airportController');

router.get('/airport/:id',airportController.read);
router.post('/airport',airportController.create);

module.exports = router;