const myLibrary = [];

function Book(title, author, pages, hasRead, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = id;

  this.giveInfo = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages, and ${
      this.hasRead ? "has" : "has not"
    } been read.`;
  };
}

let testBook = new Book(
  "Harry Potter",
  "JK Rowling",
  "300",
  true,
  crypto.randomUUID()
);

console.log(testBook.giveInfo());
