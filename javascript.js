const myLibrary = [];

class Book {
    constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    }
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

const button = document.querySelector(".addBookBtn");
button.addEventListener("click", function(e) {
    e.preventDefault();
    addBookToLibrary();
    libraryBooksDisplay();
});


function libraryBooksDisplay() {
    const table = document.querySelector("table");
    const tbody = document.querySelector("tbody");

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    for (let book of myLibrary) {
        console.log("librayBooksDisplay called!"); //Added to highlight the duplication bug.
            const row = document.createElement("tr");
            row.dataset.id = book.id;

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
            const cellIDContent = document.createTextNode(book.id);
            cellID.appendChild(cellIDContent);
            row.appendChild(cellID);

            const cellButtons = document.createElement("td");
            cellButtons.setAttribute("headers", "button-col");
            const deleteButton = document.createElement("button");
            const toggleButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            toggleButton.textContent = "Read Status";
            deleteButton.classList.toggle = "delete-btn";
            toggleButton.classList.toggle = "toggle-btn";
            cellButtons.appendChild(deleteButton);
            cellButtons.appendChild(toggleButton);
            row.appendChild(cellButtons);
            deleteButton.onclick = deleteBook;
            toggleButton.onclick = toggleReadStatus;

            tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function deleteBook() {
    const rowToDelete = this.closest("tr");
    const bookIdToDelete = rowToDelete.dataset.id;
    const myNewLibrary = myLibrary.filter(book => book.id !== bookIdToDelete);
    myLibrary.length = 0;
    myLibrary.push(...myNewLibrary);
    rowToDelete.remove();
}
libraryBooksDisplay();

function toggleReadStatus() {
    const rowToToggle = this.closest("tr");
    const BookIdToToggle = rowToToggle.dataset.id;
    const bookToUpdate = myLibrary.find(book => book.id === BookIdToToggle);

    if (bookToUpdate) {
        if (bookToUpdate.read === "not-yet") {
        bookToUpdate.read = "in-progress";
    } else if (bookToUpdate.read === "in-progress") {
        bookToUpdate.read = "read";
    } else if (bookToUpdate.read === "read"){
        bookToUpdate.read = "not-yet";
    } else {
        bookToUpdate.read = "not-yet";
    }
    }
    libraryBooksDisplay()
}