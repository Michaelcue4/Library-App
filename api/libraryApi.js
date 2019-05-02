const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const Library = new Schema({
    name: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref:'Books'
    }],
    librarian:{
        type: Schema.Types.ObjectId,
        ref: 'Librarian'
    }
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('Library',Library)