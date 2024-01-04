const express = require('express');
const router = express.Router();
const flightController = require('../../controller/flightController');
const { flightMiddlewares } = require('../../middlewares/index');

router.post(
    '/flight',
    flightMiddlewares.validateFlightCreation,
    flightController.create
);
router.get('/flights',flightController.getAll);
module.exports = router;