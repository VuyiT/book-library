const myLibrary = [];

function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("Must use operator 'new' when you call this constructor");
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, bookId) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookId);

    return myLibrary.push(newBook);
}

addBookToLibrary("oscar", "Jun Go", "112", "not yet read", crypto.randomUUID())
addBookToLibrary("oscar", "Jun Go", "112", "not yet read", crypto.randomUUID())
addBookToLibrary("Billie Book", "Stacy Chan", "98", "read", crypto.randomUUID())

console.log(myLibrary);

// CREATIVE DIRECTION
// Separate the diffrent headings of the book like title and author using map method
// Create a table structire on html
// Use js to add cells on to the table according to the user's input of books

let bookTitle = myLibrary.map(book => book.title);
console.log(bookTitle)

let bookAuthor = myLibrary.map(book => book.author);
console.log(bookAuthor)

let bookPages = myLibrary.map(book => book.pages);
console.log(bookPages)

let bookRead = myLibrary.map(book => book.read);
console.log(bookRead)

let bookId = myLibrary.map(book => book.id);
console.log(bookId)

const titleCells = document.querySelector("table>tbody>tr>td[headers=title]");

titleCells.textContent = myLibrary.map(book => book.title)[2];