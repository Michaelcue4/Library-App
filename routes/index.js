const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/libraryController');
const rentedController = require('../controllers/rentedController');
const onHoldController = require('../controllers/onHoldController')
//////////////////////////////////////////////////
//router.use(express.static('frontEnd'))
///////////////////////////////////////////////////
router.get('/', libraryController.index)
router.get('/new', libraryController.new);
router.get('/:id', libraryController.show);
router.get('/:id/edit', libraryController.edit);

router.post('/', libraryController.create);
router.put('/:id', libraryController.update);
router.delete('/:id', libraryController.delete);
module.exports = router;