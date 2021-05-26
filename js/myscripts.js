let myLibrary = [];

function Book(title, author, pages, year, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBook(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let year = document.querySelector('#year').value;
    const rbs = document.querySelectorAll('input[name="is-read"]');
    let isRead;
    for (const rb of rbs) {
        if (rb.checked) {
            isRead = rb.value;
            break;
        }
    }
    let book = new Book(title, author, pages, year, isRead);
    addBookToLibrary(book);
    console.log(myLibrary);
    resetFields();
    return false;
}

function resetFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#unread').checked = true;
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
        let textNode = document.createTextNode(`${book.title} by ${book.author} is ${book.pages} pages, was released in ${book.year}, and ${isRead(book.isRead)}`);
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

const form = document.querySelector('#new-book-form');
form.addEventListener('submit', addBook);

const displayLibrary = document.querySelector('#show-library');
displayLibrary.addEventListener('click', showLibrary);

let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.modal .modal-content .close');
closeBtn.addEventListener('click', closeForm);

function closeForm() {
    modal.style.display = 'none';
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', openForm);

function openForm() {
    modal.style.display = 'block';
}

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})