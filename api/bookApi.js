const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema
//////////////////////////////////////
const books = new Schema({
    name: String,
    author: String,
    genre: String
})
/////////////////////////////////////////
module.exports = mongoose.model('Books',books);