class Book {
  #title;
  constructor(title, author, year) {
    this.#title = title;
    this.author = author;
    this.year = year;
  }

  get bookTitle() {
    return this.#title;
  }

  set bookTitle(value) {
    if (value.length == 0) {
      console.log(`Judul Buku tidak boleh kosong!`);
    } else {
      this.#title = value;
    }
  }

  #bookDetails() {
    console.log(
      `
        Book's Detail : 
        Title : ${this.#title} 
        Author : ${this.author} 
        Year : ${this.year}
        `
    );
  }

  bookDetailsPlease() {
    this.#bookDetails();
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  get bookPrice() {
    return this.price;
  }

  set bookPrice(value) {
    if (typeof value !== "number") {
      console.log(`Harga Buku harus bertipe number!`);
    } else {
      this.price = value;
    }
  }

  bookDetails() {
    console.log(
      `
        Book's Detail :
        Title : ${this.title} 
        Author : ${this.author} 
        Year : ${this.year} 
        Price : ${this.price}
        `
    );
  }
}

const ebook = new Ebook(`Hujan`, `Tere Liye`, 2010, "100000");
ebook.bookPrice = "100000";
ebook.bookTitle = "";
ebook.bookDetailsPlease();
