const express = require('express');

const router = express.Router();

const cityController = require('../../controller/cityController');

router.post('/city',cityController.create);
router.post('/cities',cityController.createAll);
router.get('/city/:id',cityController.read);
router.get('/cities',cityController.readAll);
router.patch('/city/:id',cityController.update);
router.delete('/city/:id',cityController.destroy);

module.exports = router;