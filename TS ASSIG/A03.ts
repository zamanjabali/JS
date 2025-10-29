type book = {
    title: string;
    autthor: string;
    publishedYear: number;
    summary?: string;
};

const book1: book = {
    title: "A History of Loneliness",
    autthor: "John Boyne",
    publishedYear: 2015,
    summary: "A novel exploring themes of loneliness and redemption.",
}

const book2: book = {
    title: "The Silent Patient",
    autthor: "Alex Michaelides",
    publishedYear: 2019,
}

function printBookDetails(book: book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.autthor}`);
    console.log(`Published Year: ${book.publishedYear}`);
    if (book.summary) {
        console.log(`Summary: ${book.summary}`);
    }
}
printBookDetails(book1);
printBookDetails(book2);   

type Student = {
    id: number;
    name: string;
    enrolled: boolean;
};

let Student1: Student = {
    id: 1,
    name: "zaman",
    enrolled: true,
};

let Student2: Student = {
    id: 2,
    name: "basit",
    enrolled: false,
};

console.log(Student1.name);
