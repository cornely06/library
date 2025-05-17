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

addBookToLibrary("Harry Potter", "JK Rowling", "300", false);
addBookToLibrary("Fight Club", "Chuck Palahniuk", "250", true);
