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

function deleteBook() {
    myLibrary.splice(this.dataset.index, 1);
    showLibrary();
}

function showLibrary() {
    let library = document.querySelector('#library');
    while(library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach((book, index) => {
        let listItem = document.createElement('LI');
        let textNode = document.createTextNode(`${book.title} by ${book.author} ${isRead(book.isRead)}`);
        listItem.appendChild(textNode);
        let remove = document.createElement('BUTTON');
        remove.innerHTML = "&times;";
        remove.dataset.index = index;
        remove.addEventListener('click', deleteBook);
        listItem.appendChild(remove);
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