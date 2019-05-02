const Books = require('../api/bookApi')
const Library = require('../api/libraryApi')

const bookController = {
index:(req,res)=> {
    const libraryId = req.params.id
    Library.findById(libraryId).populate("books").then((library)=>{
        const books = library.books
        console.log(library)
        console.log(books);
        res.render('book/index',{books ,library})
        })
    },
    new:(req,res)=>{
        const libraryId = req.params.id;
        res.render('book/new',{libraryId});
    },

    create: (req,res)=>{
        const libraryId = req.params.id;
        Library.findById(libraryId).then((library)=>{
            Books.create({
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
        Books.findById(bookId).then((book)=>{
            res.render('book/show',{book,libraryId})
        })
    },

    edit:(req,res)=>{
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Books.findById(bookId).then((book)=>{
            res.render('book/edit',{libraryId, bookId, book})
        })
    },

    update:(req,res)=>{
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Books.findByIdAndUpdate(bookId,req.body,{new:true})
        .then((book)=>{
            res.redirect(`/${libraryId}`);
        })
    },

    delete: (req, res) => {
        const libraryId = req.params.id
        const bookId = req.params.bookId
        Books.findByIdAndRemove(bookId)
            .then(() => {
                res.redirect(`/${libraryId}/book`)
            })
    }
}
module.exports = bookController;