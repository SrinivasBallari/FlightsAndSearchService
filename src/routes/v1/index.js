const express = require('express');
const router = express.Router();
const cityRoutes = require('./cityRoutes');
const airportRoutes = require('./airportRoutes');

router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);

module.exports = router;