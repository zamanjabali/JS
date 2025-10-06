let percentage = 30;
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
