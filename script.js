const myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
}
Book.prototype.toggleStatus = function() {
    switch (this.status) {
        case "Read":
            this.status = "Not read yet";
            break;
        case "Not read yet":
            this.status = "Read";
            break;
    }
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 363, "Not read yet");
addBookToLibrary("Lord of the Rings", "Rick Riordan", 254, "Read");


// Getting a reference to the container
const container = document.querySelector(".container");

// Displaying the books
for(let book of myLibrary) {
    let bookDisplay = document.createElement("div");
    // bookDisplay.textContent = book.info();

    // Title
    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = `Title: ${book.title}`;
    bookDisplay.appendChild(title);

    // Author
    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent = `Author: ${book.author}`;
    bookDisplay.appendChild(author);
    
    // Pages
    let pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = `Pages: ${book.pages}`;
    bookDisplay.appendChild(pages);

    // Status
    let status = document.createElement("p");
    pages.classList.add("status");
    pages.textContent = `Status: ${book.status}`;
    bookDisplay.appendChild(status);

    bookDisplay.classList.add("book")
    container.appendChild(bookDisplay);
}

// const addButton = document.querySelector("#add-book");
// addButton.addEventListener("click", (event)=>{
    
// })