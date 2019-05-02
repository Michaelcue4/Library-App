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
        const libraryId = req.params.id;
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
                console.log(book)
                library.books.push(book)
                library.save()
                res.redirect(`/${libraryId}`)
            })
        })
    },

    show:(req,res)=>{
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Book.findById(bookId).then((book)=>{
            res.render('book/show',{book,libraryId})
        })
    },

    edit:(req,res)=>{
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Book.findById(bookId).then((book)=>{
            res.render('book/edit',{libraryId, bookId, book})
        })
    },

    update:(req,res)=>{
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Book.findByIdAndUpdate(bookId,req.body,{new:true})
        .then((book)=>{
            res.redirect(`/${libraryId}`);
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
}
module.exports = bookController;