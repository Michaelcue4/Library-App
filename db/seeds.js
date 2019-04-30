const library = require('../api/libraryApi')
const rented = require('../api/rentedApi')
const onHold = require('../api/onHoldApi')

const newonHold = new onHold ({
    bookName: "The Thing",
    bookAuthor: "Stephen King",
    genre: "Fiction, Horror"
})
const newonHold1 = new onHold ({
    bookName: "Pet Semetary",
    bookAuthor: "Stephen King",
    genre: "Fiction, Horror"
})
const newonHold2 = new onHold ({
    bookName: "IT",
    bookAuthor: "Stephen King",
    genre: "Fiction, Horror"
})
const newrented = new rented({
    bookName: "A Game of Thrones",
    bookAuthor: "George R. Martin",
    genre:"epic Fantasy",
})
const newrented1 = new rented({
    bookName: "A Song of Ice and Fire",
    bookAuthor: "George R. Martin",
    genre:"epic Fantasy"

})
const newrented2 = new rented({
    bookName: "A Dance with Dragons",
    bookAuthor: "George R. Martin",
    genre:"epic Fantasy"

})
const newlibrary = new library({
    userName:"Michael",
    isActive: true,
    onHoldApi:[newonHold],
    rentedApi:[newrented]
})
const newlibrary1 = new library({
    userName:"Michael Lawson",
    isActive: true,
    onHoldApi:[newonHold1],
    rentedApi:[newrented1]
})
const newlibrary2 = new library({
    userName:"Michael White",
    isActive: true,
    onHoldApi:[newonHold2],
    rentedApi:[newrented2]
})
