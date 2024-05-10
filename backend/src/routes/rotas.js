const express = require('express');
const router = express.Router();
const dataController = require('../controllers/controlador');

router.post('/data', dataController.createData);
router.get('/dados', dataController.getData);

module.exports = router;
