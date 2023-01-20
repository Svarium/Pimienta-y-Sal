const express = require('express');
const router = express.Router();

const {home, detalle} = require('../controllers/mainController')

/* / */
router.get('/', home);
router.get('/detalle/:id', detalle);

module.exports = router;
