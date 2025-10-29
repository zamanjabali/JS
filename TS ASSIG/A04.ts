interface book{
    title:string,
    author:string,
    published_year:number;
    summary?:string;
}
const book1:book={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    published_year:1925,
    summary:"A novel about the American dream and the decadence of the Jazz Age."
};

const book2:book={
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    published_year:1960
};

function displayBookInfo(book:book):void{
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.published_year}`);
    if(book.summary){
        console.log(`Summary: ${book.summary}`);
    }
}
displayBookInfo(book1);
displayBookInfo(book2);
