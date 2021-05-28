let myLibrary = [];

function Book(title, author, year, pages, isRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBook(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    if (myLibrary.some(book => book.title == title)) {
        alert("That book already exists in the library.");
        return false;
    }
    let author = document.querySelector('#author').value;
    let year = document.querySelector('#year').value;
    let pages = document.querySelector('#pages').value;
    const rbs = document.querySelectorAll('input[name="is-read"]');
    let isRead;
    for (const rb of rbs) {
        if (rb.checked) {
            isRead = rb.value;
            break;
        }
    }
    let book = new Book(title, author, year, pages, isRead);
    addBookToLibrary(book);
    console.log(myLibrary);
    resetFields();
    return false;
}

function resetFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#unread').checked = true;
}

function deleteBook() {
    myLibrary.splice(this.dataset.index, 1);
    showLibrary();
}

function showLibrary() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach((book, index) => {
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        let title = document.createElement('div');
        title.classList.add('title-container');
        title.textContent = `${book.title}`;
        let author = document.createElement('div');
        author.classList.add('author-container');
        author.textContent = `${book.author}`;
        let year = document.createElement('div');
        year.classList.add('year-container');
        year.textContent = `${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages}`;
        let removeBtn = document.createElement('span');
        removeBtn.classList.add('close');
        removeBtn.innerHTML = "&times;";
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(removeBtn);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        library.appendChild(bookContainer);
    })
}

function showRead() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.filter(book => (book.isRead == "true"))
             .forEach((book, index) => {
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        let title = document.createElement('div');
        title.classList.add('title-container');
        title.textContent = `${book.title}`;
        let author = document.createElement('div');
        author.classList.add('author-container');
        author.textContent = `${book.author}`;
        let year = document.createElement('div');
        year.classList.add('year-container');
        year.textContent = `${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages}`;
        let removeBtn = document.createElement('span');
        removeBtn.classList.add('close');
        removeBtn.innerHTML = "&times;";
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(removeBtn);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        library.appendChild(bookContainer);
    })
}

function showUnread() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.filter(book => (book.isRead == "false"))
             .forEach((book, index) => {
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        let title = document.createElement('div');
        title.classList.add('title-container');
        title.textContent = `${book.title}`;
        let author = document.createElement('div');
        author.classList.add('author-container');
        author.textContent = `${book.author}`;
        let year = document.createElement('div');
        year.classList.add('year-container');
        year.textContent = `${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages}`;
        let removeBtn = document.createElement('span');
        removeBtn.classList.add('close');
        removeBtn.innerHTML = "&times;";
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(removeBtn);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        library.appendChild(bookContainer);
    })
}

let readBtn = document.querySelector('#read-book-btn');
readBtn.addEventListener('mousedown', showRead);

let unreadBtn = document.querySelector('#unread-book-btn');
unreadBtn.addEventListener('mousedown', showUnread);

let showAllBtn = document.querySelector('#show-all-book-btn');
showAllBtn.addEventListener('mousedown', showLibrary);

const form = document.querySelector('#new-book-form');
form.addEventListener('submit', addBook);
form.addEventListener('submit', showLibrary);

let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.modal .modal-content .close');
closeBtn.addEventListener('mousedown', closeForm);

function closeForm() {
    modal.style.display = 'none';
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('mousedown', openForm);

function openForm() {
    modal.style.display = 'block';
}

window.addEventListener('mousedown', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})