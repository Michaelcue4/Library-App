const express = require('express')
const router = express.Router()
const libraryController = require('../controllers/libraryController');
const bookController = require('../controllers/bookController');
const librarianController = require('../controllers/librarianController')
//////////////////////////////////////////////////
//router.use(express.static('frontEnd'))
/////////------Library Routes---------////////////////
router.get('/', libraryController.index)
router.post('/', libraryController.create);
router.get('/new', libraryController.new);
router.get('/:id', libraryController.show);
router.get('/:id/edit', libraryController.edit);
router.put('/:id', libraryController.update);
router.delete('/:id', libraryController.delete);
//////////-----Book Routes------------//////////////////////
router.get('/:id/book', bookController.index);
router.post('/:id/book',bookController.create)
router.get('/:id/book/new',bookController.new)
router.get('/:id/book/:bookId',bookController.show)
router.get('/:id/book/:bookId/edit',bookController.edit)
router.put('/:id/book/:bookId',bookController.update)
router.delete('/:id/book/:bookId/',bookController.delete);
////////////-----Librarian Routes-----//////////////////////
// router.get('/:id/librarian',librarianController.index)
// router.post('/:id/librarian',librarianController.create)
// router.get(':id/librarian/new',librarianController.new)
// router.get('/:id/librarian/:librarianId',librarianController.show)
// router.get('/:id/librarian/:librarianId/edit',librarianController.edit)
// router.put('/:id/librarian/:librarianId',librarianController.update)
// router.delete('/:id/librarian/:librarianId',librarianController.delete)
module.exports = router;