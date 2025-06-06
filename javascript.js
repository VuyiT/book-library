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

            const cellDelete = document.createElement("td");
            cellDelete.setAttribute("headers", "delete-book");
            const cellDeleteContent = document.createElement("button");
            cellDeleteContent.textContent = "Delete Book";
            cellDelete.classList.toggle("delete-btn");
            cellDelete.appendChild(cellDeleteContent);
            row.appendChild(cellDelete);
            
            // I need to add the delete logic and I need to link it to the book id

            tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

// Logic for removing elements in an array
// What I want is for the delete button to be pressed, 
// The button belonging to the row to delete the row it is in
// And to trigger the removal of the specific book in the array.

// So first I need a function that deletes a book from the array, then call that function when clicking the delete button

// And another function that will remove the deleted book from display and will call that function together with the first func on the delete button OR I just need a code or function that return the new array without the deleted books and the delete button can just show the new array when it is clicked.