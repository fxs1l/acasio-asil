class Book {
  constructor(title, author, genre, availability=true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }
  borrowBook() {
    if (this.availability) {
      this.availability = false;
      console.log(`[borrowBook]: "${this.title}" has been borrowed.`);
    } else {
      console.log(`[borrowBook]: "${this.title}" is not available for borrowing.`);
    }
  }

  returnBook() {
    if (!this.availability) {
      this.availability = true;
      console.log(`[returnBook]: "${this.title}" has been returned.`);
    } else {
      console.log(`[returnBook]: "${this.title}" was not borrowed.`);
    }
  }

  displayInfo() {
    console.log(`[displayInfo]: \nTitle: ${this.title}\nAuthor: ${this.author}\nGenre: ${this.genre}\nAvailability: ${this.availability}`);
  }

}

class Library {
  constructor(books=[]) {
    this.books = books;
  }

  addBook(title, author, genre) {
    const book = new Book(title, author, genre);
    this.books.push(book);
    console.log(`[addBook]: "${book.title}" has been added to the library.`);
  }

  searchBook(title) {
    const foundBook = this.books.find(book => book.title === title);
    if (foundBook) {
      console.log(`[searchBook]: Found "${foundBook.title}"`)
      foundBook.displayInfo();
    } else {
      console.log(`[searchBook]: "${title}" not found.`);
    }
  }

  displayBooks(){
    console.log("[displayBooks]: This library has the following books: ")
    // console.log('-------------------');
    this.books.forEach(book => {
      book.displayInfo();
    });
  }
}

const library = new Library();
const book1 = new Book('Colorless Tsukuru Tazaki and His Years of Pilgrimage', 'Haruki Murakami', 'Fiction');
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction');
const book3 =  new Book('The Catcher in the Rye', 'J.D. Salinger', 'Fiction');
library.addBook(book1.title, book1.author, book1.genre);
library.addBook(book2.title, book2.author, book2.genre);
library.addBook(book3.title, book3.author , book3.genre);
library.searchBook(book1.title);
library.searchBook("Programming Basics 101")
library.displayBooks();

// Additional
console.log("--------")
library.books[0].borrowBook();
library.books[0].borrowBook(); // not available
library.books[0].returnBook();
library.books[0].borrowBook(); // available
library.books[0].displayInfo();
