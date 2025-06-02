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
