const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema
//////////////////////////////////////
const Books = new Schema({
    name: String,
    author: String,
    genre: String
})
/////////////////////////////////////////
module.exports = mongoose.model('Books',Books);