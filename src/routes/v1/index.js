const express = require('express');

const router = express.Router();

const cityController = require('../../controller/cityController');

router.post('/city',cityController.create);
router.get('/city/:id',cityController.read);
router.patch('/city/:id',cityController.update);
router.delete('/city/:id',cityController.destroy);
router.get('/cities',cityController.readAll);

module.exports = router;