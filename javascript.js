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

console.log(myLibrary);

const button = document.querySelector("button");
button.addEventListener("click", function(e) {
    e.preventDefault();
});


function libraryBooksDisplay() {
    const table = document.querySelector("table");
    const tbody = document.querySelector("tbody");

    for (let book of myLibrary.map(book => book)) {
        for (let i = 0; i < 1; i++) {
            const row = document.createElement("tr");

            const cellTitle = document.createElement("td");
            cellTitle.setAttribute("headers", "book-title");
            const cellTitleContent = document.createTextNode(book.title);
            cellTitle.appendChild(cellTitleContent);
            row.appendChild(cellTitle);

            const cellAuthor = document.createElement("td");
            cellAuthor.setAttribute("headers", "book=author");
            const cellAuthorContent = document.createTextNode(book.author);
            cellAuthor.appendChild(cellAuthorContent);
            row.appendChild(cellAuthor);

            const cellPages = document.createElement("td");
            cellPages.setAttribute("headers", "book-pages");
            const cellPagesContent = document.createTextNode(book.pages);
            cellPages.appendChild(cellPagesContent);
            row.appendChild(cellPages);

            const cellRead = document.createElement("td");
            cellRead.setAttribute("headers", "book-read");
            const cellReadContent = document.createTextNode(book.read);
            cellRead.appendChild(cellReadContent);
            row.appendChild(cellRead);

            const cellID = document.createElement("td");
            cellID.setAttribute("headers", "book-id");
            const cellIDContent = document.createTextNode(crypto.randomUUID());
            cellID.appendChild(cellIDContent);
            row.appendChild(cellID);

            tbody.appendChild(row);

    }
}
table.appendChild(tbody);
document.body.appendChild(table);
}
