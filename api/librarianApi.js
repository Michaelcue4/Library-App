const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;
/////////////////////////////////////////
const Librarians = new Schema({
    name: String
})
////////////////////////////////////////////
module.exports = mongoose.model('Librarians',Librarians)