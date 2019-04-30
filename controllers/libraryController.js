const Library = require('../api/libraryApi');

const libraryController =
{
    index:(req,res)=>
    Library.find({}).then(library=>{
        res.render('library/index',{library})
    })

}

module.exports = libraryController;