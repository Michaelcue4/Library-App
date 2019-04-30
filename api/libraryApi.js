const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const Library = new Schema({
    userName: String,
    isActive: Boolean,
    userId: ObjectId,
    rentedApi: [{
        type: Schema.mongoose.ObjectId,
        ref:'rentedApi'
    }]
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('libraryApi',Library)