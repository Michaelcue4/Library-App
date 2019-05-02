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
router.get('/:id/book/new',bookController.new)
router.post('/:id/book',bookController.create)
router.get('/:id/book',bookController.show)
router.put('/:id/book',bookController.update)
router.get('/:id/book/edit',bookController.edit)
router.delete('/:id/book/:bookId',bookController.delete);
////////////-----Librarian Routes-----//////////////////////
// router.get('/:id/librarian',librarianController.index)
// router.get(':id/librarian',librarianController.new)
// router.post('/:id/librarian',librarianController.create)
// router.get('/:id/librarian',librarianController.show)
// router.put('/:id/librarian',librarianController.update)
// router.get('/:id/librarian',librarianController.edit)
// router.delete('/:id/librarian',librarianController.delete)
module.exports = router;