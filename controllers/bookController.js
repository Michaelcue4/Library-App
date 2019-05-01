const Book = require('../api/bookApi')
const Library = require('../api/libraryApi')

const bookController = {
index:(req,res)=> {
    Book.find({}).then(bookList=>{
        const libraryId = req.params.id
        console.log(bookList);
        res.render('book/index',{bookList ,libraryId})
    })
},
    new:(req,res)=>{
        const libraryId = req.params.index;
        res.render('book/new',{libraryId});
    },
    create: (req,res)=>{
        const libraryId = req.params.id;
        Library.findById(libraryId).then((library)=>{
            Book.create({
                name:req.body.name,
                author:req.body.author,
                genre: req.body.genre
            }).then(book =>{
                library.books.push(bookList)
                library.save()
                res.redirect(`/${library._id}`)
            })
        })
    },
    delete: (req, res) => {
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Book.findByIdAndDelete(bookId)
            .then(() => {
                res.redirect(`/${libraryId}`)
            })
    }
    // delete: (req,res) =>{
    //     Books.findById.delete(req.params.id)
    //     .then(()=>{
    //         res.redirect(`/${req.params.libraryId}`);
    //     })
    // }
}
module.exports = bookController;