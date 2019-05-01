const library = require('../api/libraryApi');
const librarian = require('../api/librarianApi');
const books = require('../api/bookApi');
const mongoose = require('mongoose');
///////////////////////////////////////
(async () =>{


    const newbook = await new books ({
        name: "The Thing",
        author: "Stephen King",
        genre: "Fiction, Horror"
    }).save();
    
    const newbook1 = await new books ({
        name: "Pet Semetary",
        author: "Stephen King",
        genre: "Fiction, Horror"
    }).save();
    const newbook2 = await new books ({
        name: "IT",
        author: "Stephen King",
        genre: "Fiction, Horror"
    }).save();
    const Librarian = await new librarian({
        name:"Noah"
    }).save();
    const newlibrary = await new library({
        name:"Bright Falls Library",
        books:[newbook,newbook1,newbook2],
        librarian: this.librarian
    }).save();
    await mongoose.disconnect();
})();



