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
        Library.create(req.body).then(() => {
            res.redirect("/");
          })
    },
    show:(req,res)=>{
        const libraryId = req.params.id 
        Library.findById(libraryId).then((Singlelibrary)=>{
            res.render('library/show',{Singlelibrary});
        })
    },
    edit:(req,res)=>{
        Library.findById(req.params.id).then(Singlelibrary=>{
            res.render('library/edit', {Singlelibrary})
        })
    },
    update:(req,res)=>{
        Library.updateOne({_id : req.params.id}, req.body).then(() => {
            res.redirect("/" + req.params.id);
          })
    },
    delete:(req,res)=>{
        Library.deleteOne({"_id":req.params.id}).then(()=>{
            res.redirect("/")
        })
    }
}

module.exports = libraryController;