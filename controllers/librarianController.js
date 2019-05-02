const Library = require('../api/libraryApi')
const Librarians = require('../api/librarianApi')

const librarianController = {

    index:(req,res)=> {
        const libraryId = req.params.id
        Library.findById(libraryId).populate('librarians').then((library) => {
            // console.log(librarianList);
            const librarians = library.librarians
            console.log(librarians)
            res.render('librarian/index',{librarians,library})
        })
    },
    new:(req,res)=>{
        const libraryId = req.params.id;
        res.render('librarian/new',{libraryId});
    },
    create: (req,res)=>{
        const libraryId = req.params.id;
        Library.findById(libraryId).then((library)=>{
            Librarians.create({
                name:req.body.name
            }).then(librarian =>{
                console.log(librarian)
                library.librarians.push(librarian)
                
                library.save()
                res.redirect(`/${libraryId}`)
            })
        })
    },
    show: (req,res)=>{
        const libraryId = req.params.id;
        const librarianId = req.params.librarianId
        Librarians.findById(librarianId).then((librarian)=>{
            res.render('librarian/show',{librarian,libraryId})
        })
    },
    edit:(req,res)=>{
        const libraryId = req.params.id
        const librarianId = req.params.librarianId
        Books.findById(librarianId).then((librarian)=>{
            res.render('librarian/edit',{libraryId, librarianId, librarian})
        })
    },
    update:(req,res)=>{
        const libraryId = req.params.id
        const librarianId = req.params.librarianId
        Librarians.findByIdAndUpdate(librarianId,req.body,{new:true})
        .then((librarian)=>{
            res.redirect(`/${libraryId}`);
        })
    },
    delete: (req, res) => {
        const libraryId = req.params.id
        const librarianId = req.params.librarianId
        Librarians.findByIdAndRemove(librarianId)
            .then(() => {
                res.redirect(`/${libraryId}/librarian`)
            })
    }

}
module.exports = librarianController;