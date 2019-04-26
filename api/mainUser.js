const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LibrarySchema = mongoose.Schema({
    name: String,
    bookName: String,
    gameName: String,
    userId: ObjectId
})

let LibraryCollection = mongoose.model("Library Account",LibrarySchema);

function CreateLibraryAccounts(newLibraryAccount,userId){
    newLibraryAccount.userId = userId;
    return LibraryCollection.create(newLibraryAccount)
}
function getLibraryAccountsByUserId(uId) {
    return LibraryCollection.find({ userId: uId});
  }
  module.exports = {
      CreateLibraryAccounts,
      getLibraryAccountsByUserId
  }