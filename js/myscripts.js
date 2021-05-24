let myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isRead = document.querySelector('#is-read').value;
    let book = new Book(title, author, isRead);
    addBookToLibrary(book);
    console.log(myLibrary);
}

function showLibrary() {
    let library = document.querySelector('#library');
    while(library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach(book => {
        let listItem = document.createElement('LI');
        let textNode = document.createTextNode(`${book.title} by ${book.author} ${isRead(book.isRead)}`);
        listItem.appendChild(textNode);
        library.appendChild(listItem);
    })
}

function isRead(check) {
    return check ? 'has been read' : 'not read yet'
}

const newBook = document.querySelector('#add');
newBook.addEventListener('click', addBook);

const displayLibrary = document.querySelector('#show-library');
displayLibrary.addEventListener('click', showLibrary);


/*
let diary = new Book("Diary", "Chuck Palanhiuk", true)
addBookToLibrary(diary);
console.log(diary);
console.log(myLibrary);
*/