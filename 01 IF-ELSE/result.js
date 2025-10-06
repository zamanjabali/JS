let percentage = 60;
let grade = '';

if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 60) {
    grade = 'B';
} else if (percentage >= 40) {
    grade = 'C';
} else{
    grade = 'D';
}

console.log("Percentage = " + percentage);
console.log("Grade = " + grade);

 let result = "";
 if (grade == 'A') {
    result = "Pass with Distinction";
 } else if(grade == 'B') {
    result = "Pass with good score";
 }else if(grade == 'C') {
    result = "you have passed";
 } else if(grade == 'D') {
    result = "you have failed";
 } else{
    result = "Invalid grade";
 }
 console.log("Result = " + result);