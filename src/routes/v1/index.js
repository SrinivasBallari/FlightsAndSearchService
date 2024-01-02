const express = require('express');
const router = express.Router();
const cityRoutes = require('./cityRoutes');
const airportRoutes = require('./airportRoutes');
const flightRoutes = require('./flightRoutes');

router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes);

module.exports = router;