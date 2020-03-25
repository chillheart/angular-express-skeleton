var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController.js');

/*
 * GET
 */
router.get('/', apiController.list);

module.exports = router;
