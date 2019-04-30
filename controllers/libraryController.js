const Library = require('../api/libraryApi');

const libraryController =
{
    index:(req,res)=>
    Library.find({}).then(library=>{
        res.render('library/index',{library})
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