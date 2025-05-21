// Create new books and a library array to store them
const myLibrary = [];

function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();

  this.giveInfo = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages, and ${
      this.hasRead ? "has" : "has not"
    } been read.`;
  };
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
let container = document.querySelector(".library");
myLibrary.forEach((book) => {
  let card = document.createElement("div");
  card.classList.add("book-card");
  makeCard(book, card);
  container.appendChild(card);
});

// Add books to card grid that displays data as author, title, etc
function makeCard(book, card) {
  const bookItems = ["title", "author", "pages"];
  bookItems.forEach((item) => {
    let atr = document.createElement("p");
    let p = document.createElement("p");
    atr.innerHTML = item + ":";
    p.innerHTML = book[item];
    card.appendChild(atr);
    card.appendChild(p);
  });
  hasRead(book, card);
  closeButton(card);
}

function hasRead(book, card) {
  let div1 = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = book.id;
  checkbox.checked = book.hasRead;
  checkbox.classList.add("has-read");
  let div2 = document.createElement("div");
  let label = document.createElement("label");
  label.htmlFor = book.id;
  label.textContent = "Read:";
  div2.appendChild(label);
  div1.appendChild(checkbox);
  card.appendChild(div2);
  card.appendChild(div1);
}

function closeButton(card) {
  let button = document.createElement("button");
  button.innerHTML = "&#215";
  button.classList.add("close-card");
  card.appendChild(button);
}

// Be able to edit the info on the card
// Add switch for has read to go between has and not
// Be able to filter books by has read, alphabetical order, etc
