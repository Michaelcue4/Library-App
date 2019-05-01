const Library = require('../api/libraryApi');

const libraryController =
{
    index:(req,res)=>
    Library.find({}).then(libraryList=>{
        console.log(libraryList);
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
        Library.findById(libraryId).then((Singlelibrary)=>{
            res.render('library/show',{Singlelibrary});
        })
    },
    edit:(req,res)=>{
        
    },
    update:(req,res)=>{

    },
    delete:(req,res)=>{
        Library.deleteOne({"_id":req.params.id}).then(()=>{
            res.redirect("/")
        })
    },
    removeBooks:(req,res)=>{

    }

}

module.exports = libraryController;