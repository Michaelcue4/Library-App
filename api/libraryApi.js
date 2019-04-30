const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const Library = new Schema({
    userName: String,
    isActive: Boolean,
    rentedApi: [{
        type: Schema.Types.ObjectId,
        ref:'rentedApi'
    }]
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('libraryApi',Library)