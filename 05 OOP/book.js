class Book{
    title;
    author;
    genre;
    year;
    pages;

    constructor(ti, au, ge, yr, pa){
        this.title = ti;
        this.author = au;
        this.genre = ge;
        this.year = yr;
        this.pages = pa;
    }
    printDetails(){
        console.log(`Book Details: "${this.title}" by ${this.author}, Genre: ${this.genre}, Year: ${this.year}, Pages: ${this.pages}`);
    }
}
const book1 = new Book("atomic habits", "james clear", "self-help", 2018, 320);
book1.printDetails();