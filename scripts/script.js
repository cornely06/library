// Create new books and a library array to store them
const myLibrary = [];

let container = document.querySelector(".library");

function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
}

addBookToLibrary(
  "Harry Potter and the Sorcorer's Stone",
  "JK Rowling",
  "300",
  false
);
addBookToLibrary("Fight Club", "Chuck Palahniuk", "250", true);
addBookToLibrary("Harry Potter", "JK Rowling", "300", false);
addBookToLibrary("Fight Club", "Chuck Palahniuk", "250", true);

// Loop over library array and display books on page
function init() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  myLibrary.forEach((book) => createCards(book));
  document.querySelector("#form").reset();
}

function createCards(book) {
  let card = document.createElement("div");
  card.classList.add("book-card");
  card.id = book.id;
  makeCard(book, card);
  container.appendChild(card);
}
init();

// Add books to card grid that displays data as author, title, etc
function makeCard(book, card) {
  const bookItems = ["title", "author", "pages"];
  bookItems.forEach((item) => {
    let atr = document.createElement("p");
    atr.classList.add("label");
    let p = document.createElement("p");
    p.classList.add("field-info");
    atr.innerHTML = item + ":";
    p.innerHTML = book[item];
    // Be able to edit the info on the card
    p.addEventListener("click", function () {
      this.contentEditable = true;
      this.focus();
    });
    p.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        this.blur();
      }
    });
    p.addEventListener("blur", function () {
      book[item] = p.innerHTML;
      p.scrollTo(0, 0);
    });
    card.appendChild(atr);
    card.appendChild(p);
  });
  hasRead(book, card);
  closeButton(card);
}

// Add switch for has read to go between has and not
function hasRead(book, card) {
  let div1 = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = book.id;
  checkbox.checked = book.hasRead;
  checkbox.classList.add("has-read");
  checkbox.addEventListener("change", updateRead);
  let div2 = document.createElement("div");
  let label = document.createElement("label");
  label.htmlFor = book.id;
  label.textContent = "Read:";
  div2.appendChild(label);
  div1.appendChild(checkbox);
  card.appendChild(div2);
  card.appendChild(div1);
}

function updateRead() {
  let readIndex = myLibrary.findIndex((book) => book.id == this.id);
  myLibrary[readIndex].hasRead = !myLibrary[readIndex].hasRead;
}

function closeButton(card) {
  let button = document.createElement("button");
  button.innerHTML = "&#215";
  button.classList.add("close-card");
  button.addEventListener("click", function () {
    let cardId = this.parentNode.id;
    let removeIndex = myLibrary.findIndex((book) => book.id == cardId);
    myLibrary.splice(removeIndex, 1);
    init();
  });
  card.appendChild(button);
}

// Add button to make new books
let newBook = document.querySelector(".newBook");
newBook.addEventListener("click", function (e) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let hasRead = document.querySelector("#hasRead").checked;
  console.log(hasRead);
  addBookToLibrary(title, author, pages, hasRead);
  init();
  e.preventDefault();
});

// Be able to filter books by has read, alphabetical order, etc
