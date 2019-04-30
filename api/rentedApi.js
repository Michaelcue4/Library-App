const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
/////////////////////////////////////////
const Rented = new Schema({
    books: [{
        bookName: String,
        bookAuthor: String,
        genre: String
    }],
    onHoldApi:[{
        type: Schema.Types.ObjectId,
        ref: 'onHoldApi'
    }]
})
////////////////////////////////////////////
module.exports = mongoose.model('rentedApi',Rented)