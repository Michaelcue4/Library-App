const Library = require('../api/libraryApi')
const Librarian = require('../api/librarianApi')

const librarianController = {

    index:(req,res)=> {
        Librarian.find({}).then(librarianList=>{
            console.log(librarianList);
            res.render('librarian/index',{librarianList})
        })
    }
}
module.exports = librarianController;