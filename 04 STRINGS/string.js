let name = "   zaman   ";
console.log(name);
console.log(name.length);

let trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());

console.log(trimmedName.indexOf("n"));

let coursetitle = "   Learn JavaScript   ";
let newCourseTitle = coursetitle.replace("JavaScript", "ReactJS");
console.log(newCourseTitle);

let position = coursetitle.indexOf("JavaScript");
console.log(position);

let coursepart = coursetitle.substring(2 , 4);
console.log(coursepart);

console.log(coursetitle.charAt(4));

let firsrtName = "Zaman";
let lastName = "jabali";
let fullName = firsrtName.concat(" " , lastName);
console.log(fullName);

let topics = "JavaScript, HTML, CSS, ReactJS";
let topicsArray = topics.split(",");
console.log(topicsArray);

let course2 = "frontend devlopment with reactjs";
console.log(course2.includes("vuejs"));