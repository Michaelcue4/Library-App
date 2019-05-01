const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/libraryController');
const rentedController = require('../controllers/rentedController');
const onHoldController = require('../controllers/onHoldController')
//////////////////////////////////////////////////
//router.use(express.static('frontEnd'))
///////////////////////////////////////////////////
router.get('/', libraryController.index)
router.get('/',)

module.exports = router;