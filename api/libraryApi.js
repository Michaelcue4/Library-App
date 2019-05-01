const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const library = new Schema({
    name: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }],
    librarian:{
        type: Schema.Types.ObjectId,
        ref: 'Librarian'
    }
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('Library',library)