const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
/////////////////////////////////////////
const librarian = new Schema({
    name: String
})
////////////////////////////////////////////
module.exports = mongoose.model('Librarian',librarian)