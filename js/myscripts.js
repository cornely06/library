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
    saveLocal()
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
    saveLocal()
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
        year.textContent = `Released ${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages} pages`;
        let readStatus = document.createElement('button');
        readStatus.innerHTML = book.isRead;
        readStatus.classList.add('book-buttons')
        readStatus.addEventListener('mousedown',() => {
            if (book.isRead == "Read") {
                readStatus.innerHTML = "Not Read";
                book.isRead = "Not Read";
                saveLocal()
            }
            else {
                readStatus.innerHTML = "Read";
                book.isRead = "Read";
                saveLocal()
            }
            showLibrary();
        });
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('book-buttons')
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(readStatus);
        bookContainer.appendChild(removeBtn);
        library.appendChild(bookContainer);
    })
}

function showRead() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.filter(book => (book.isRead == "Read"))
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
        year.textContent = `Released ${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages} pages`;
        let readStatus = document.createElement('button');
        readStatus.innerHTML = book.isRead;
        readStatus.classList.add('book-buttons')
        readStatus.addEventListener('mousedown',() => {
            if (book.isRead == "Read") {
                readStatus.innerHTML = "Not Read";
                book.isRead = "Not Read";
                saveLocal()
            }
            else {
                readStatus.innerHTML = "Read";
                book.isRead = "Read";
                saveLocal()
            }
            showRead();
        });
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('book-buttons')
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(readStatus);
        bookContainer.appendChild(removeBtn);
        library.appendChild(bookContainer);
    })
}

function showUnread() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.filter(book => (book.isRead == "Not Read"))
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
        year.textContent = `Released ${book.year}`;
        let pages = document.createElement('div');
        pages.classList.add('pages-container');
        pages.textContent = `${book.pages} pages`;
        let readStatus = document.createElement('button');
        readStatus.innerHTML = book.isRead;
        readStatus.classList.add('book-buttons')
        readStatus.addEventListener('mousedown',() => {
            if (book.isRead == "Read") {
                readStatus.innerHTML = "Not Read";
                book.isRead = "Not Read";
                saveLocal()
            }
            else {
                readStatus.innerHTML = "Read";
                book.isRead = "Read";
                saveLocal()
            }
            showUnread();
        });
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.dataset.index = index;
        removeBtn.classList.add('book-buttons')
        removeBtn.addEventListener('mousedown', deleteBook);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(year);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(readStatus);
        bookContainer.appendChild(removeBtn);
        library.appendChild(bookContainer);
    })
}

function deleteLibrary() {
    let library = document.querySelector('#library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    deleteModal.style.display = 'none';
    saveLocal()
}

let deleteModal = document.querySelector('.deleteModal')

function askConfirmDelete() {
    deleteModal.style.display = 'block';
}

function cancelDelete() {
    deleteModal.style.display = 'none';
}

let confirm = document.querySelector('#confirm');
confirm.addEventListener('mousedown', deleteLibrary);

let cancel = document.querySelector('#cancel');
cancel.addEventListener('mousedown', cancelDelete)

let readBtn = document.querySelector('#read-book-btn');
readBtn.addEventListener('mousedown', showRead);

let unreadBtn = document.querySelector('#unread-book-btn');
unreadBtn.addEventListener('mousedown', showUnread);

let showAllBtn = document.querySelector('#show-all-book-btn');
showAllBtn.addEventListener('mousedown', showLibrary);

let deleteBtn = document.querySelector('#delete-library-btn');
deleteBtn.addEventListener('mousedown', askConfirmDelete);

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

function saveLocal() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
  
  function restoreLocal() {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    if (myLibrary === null) myLibrary = [];
    showLibrary();
  }
  
  restoreLocal();