const Book = require('../api/bookApi')
const Library = require('../api/libraryApi')

const bookController = {
index:(req,res)=> {
    Book.find({}).then(bookList=>{
        console.log(bookList);
        res.render('book/index',{bookList})
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
                res.redirect(`/${library.id}`)
            })
        })
    }
}
module.exports = bookController;