const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/libraryController');
const bookController = require('../controllers/bookController');
const librarianController = require('../controllers/librarianController')
//////////////////////////////////////////////////
//router.use(express.static('frontEnd'))
/////////------Library Routes---------////////////////
router.get('/', libraryController.index)
router.get('/new', libraryController.new);
router.get('/:id', libraryController.show);
router.get('/:id/edit', libraryController.edit);
router.post('/', libraryController.create);
router.put('/:id', libraryController.update);
router.delete('/:id', libraryController.delete);
//////////-----Book Routes------------//////////////////////
router.get('/:id/book', bookController.index);
////////////-----Librarian Routes-----//////////////////////
router.get('/:id/librarian',librarianController.index)

module.exports = router;