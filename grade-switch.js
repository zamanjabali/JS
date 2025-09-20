let percentage = 50;
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

let result = '';
switch (grade) {
    case "A":
        result = "Excellent";
        break;
    case "B":
        result = "Good";
        break;
    case "C":
        result = "Fair";
        break;
    case "D":
        result = "Poor";
        break;
    default:
        result = "Invalid grade";
     break;
}
console.log("Result = " + result);
