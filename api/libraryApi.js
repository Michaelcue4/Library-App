const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const Library = new Schema({
    name: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref:'Books'
    }],
    librarians:[{
        type: Schema.Types.ObjectId,
        ref: 'Librarians'
    }]
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('Library',Library)