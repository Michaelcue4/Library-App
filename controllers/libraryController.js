const Library = require('../api/libraryApi');

const libraryController =
{
    index:(req,res)=>
    Library.find({}).then(libraryList=>{
        res.render('library/index',{libraryList})
    }),
    new:(req,res)=>{
        res.render('library/new')
    },
    create:(req,res)=>{
        Library.create({
            userName:req.body.userName,
            isActive:req.body.isActive
        }).then(newlibrary=>{
            res.redirect('/')
        })
    },
    show:(req,res)=>{
        const libraryId = req.params.id 
        Library.findById(libraryId).populate(rentedApi).then((library)=>{
            const rented = Library.rentedApi
            res.render('library')
        })
    },
    edit:(req,res)=>{

    },
    update:(req,res)=>{

    },
    delete:(req,res)=>{

    },
    removeBooks:(req,res)=>{

    }

}

module.exports = libraryController;