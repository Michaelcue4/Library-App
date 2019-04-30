const Library = require('../api/libraryApi');

const libraryController =
{
    index:(req,res)=>
    Library.find({}).then(Library=>{
        res.render
    })

}