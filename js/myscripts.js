let myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

myLibrary.forEach(book => {

})

function addBook() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isRead = document.querySelector("#is-read").value;
    let book = new Book(title, author, isRead);
    addBookToLibrary(book);
    console.log(myLibrary);
}

const newBook = document.querySelector("#add");
newBook.addEventListener('click', addBook);


/*
let diary = new Book("Diary", "Chuck Palanhiuk", true)
addBookToLibrary(diary);
console.log(diary);
console.log(myLibrary);
*/