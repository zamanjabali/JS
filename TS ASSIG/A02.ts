function calculateBMI(weight: number, height: number): void {
    if (height <= 0) {
        console.log("Height must be greater than zero.");
        return;
    }
    if (weight <= 0) {
        console.log("Weight must be greater than zero.");
        return;
    }

    let bmi: number = weight / (height * height);
    console.log(Math.round(bmi*100)/100 );

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log("Overweight");
    }
else{
        console.log("Obese");
}
}
calculateBMI(52, 5.5);
