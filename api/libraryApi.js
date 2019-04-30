const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
///////////////////////////////////////////////////////
const Library = new Schema({
    userName: String,
    isActive: Boolean,
    rentedApi: [{
        type: Schema.Types.ObjectId,
        ref:'rentedApi'
    }],
    onHoldApi:[{
        type: Schema.Types.ObjectId,
        ref: 'onHoldApi'
    }]
})
///////////////////////////////////////////////////////
module.exports = mongoose.model('libraryApi',Library)