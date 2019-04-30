const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema
//////////////////////////////////////
const onHold = new Schema({
    books: [{
        bookName: String,
        bookAuthor: String,
        genre: String
    }],
})
/////////////////////////////////////////
module.exports = mongoose.model('onHoldApi',onHold);