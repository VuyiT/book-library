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

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    const newBook = new Book(bookTitle = title.value, bookAuthor = author.value, bookPages = pages.value, bookRead = read.value, bookId = crypto.randomUUID());

    return myLibrary.push(newBook);
}

// addBookToLibrary("oscar", "Jun Go", "112", "not yet read", crypto.randomUUID())
// addBookToLibrary("oscar", "Jun Go", "112", "not yet read", crypto.randomUUID())
// addBookToLibrary("Billie Book", "Stacy Chan", "98", "read", crypto.randomUUID())

console.log(myLibrary);

const button = document.querySelector("button");
button.addEventListener("click", function(e) {
    e.preventDefault();
});

// CREATIVE DIRECTION
// Separate the diffrent headings of the book like title and author using map method
// Create a table structire on html
// Use js to add cells on to the table according to the user's input of books

function libraryBooksDisplay() {
    for (let book of myLibrary.map(book => book)) {
        const div = document.createElement("div");
        const divText = document.createTextNode(`Book Title: ${book.title}
        Book Author: ${book.author}, Book Pages: ${book.pages}, Read Status: ${book.read}, Book ID: ${book.id}`);
        div.appendChild(divText);
        document.body.appendChild(div);
    div.style.backgroundColor="Red";
    div.style.border="1px solid yellow";
    }
}

// The button clicked should add the data to the array