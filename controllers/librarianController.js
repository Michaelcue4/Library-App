const library = require('../api/libraryApi')
const Librarian = require('../api/librarianApi')

const librarianController = {

    index:(req,res)=> {
        Librarian.find().then(librarianList => {
            // console.log(librarianList);
            res.render('librarian/index',{librarianList})
        })
    },
    new:(req,res)=>{
        const libraryId = req.params.index;
        res.render('librarian/new',{libraryId});
    },
    create: (req,res)=>{
        const libraryId = req.params.id;
        Library.findById(libraryId).then((library)=>{
            Librarian.create({
                name:req.body.name
            }).then(librarianlist =>{
                library.librarianList.push(librarianlist)
                library.save()
                res.redirect(`/${library._id}`)
            })
        })
    }
}
module.exports = librarianController;