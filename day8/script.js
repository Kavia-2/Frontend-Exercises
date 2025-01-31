function performOperations() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var sum = num1 + num2;
    var sub = num1 - num2;
    var prod = num1 * num2;
    var quot = num2 !== 0 ? num1 / num2 : 'undefined';
    
    document.getElementById("sum").innerText = "Sum: " + sum;
    document.getElementById("difference").innerText = "Difference: " + sub;
    document.getElementById("product").innerText = "Product: " + prod;
    document.getElementById("quotient").innerText = "Quotient: " + quot;
}

function checkNumber() {
    let number = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (number > 10 && number % 2 === 0) {
        result.textContent = "The number is greater than 10 and divisible by 2.";
    } else {
        result.textContent = "The number is not greater than 10 or not divisible by 2.";
    }
}

function checkSign() {
    let number = document.getElementById("numberInputTernary").value;
    let result = document.getElementById("resultTernary");
    result.textContent = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
    
}

function checkOddEven() {
    let number = parseInt(document.getElementById("numberInputEvenOdd").value);
    let result = document.getElementById("resultEvenOdd");
    if (number % 2 === 0) {
        result.textContent = "Even";
    } else {
        result.textContent = "Odd";
    }
}

function assignGrade() {
    let percentage = document.getElementById("percentageInput").value;
    let gradeOutput = document.getElementById("gradeOutput");
    let grade = "";

    // Use a switch statement to assign grades based on the percentage range
    switch (true) {
        case percentage >= 90 && percentage <= 100:
            grade = "Grade: A";
            break;
        case percentage >= 80 && percentage < 90:
            grade = "Grade: B";
            break;
        case percentage >= 70 && percentage < 80:
            grade = "Grade: C";
            break;
        case percentage >= 0 && percentage < 70:
            grade = "Grade: F";
            break;
        default:
            grade = "Enter valid percentage.";
            break;
    }
    gradeOutput.innerText = grade;
}

document.getElementById("percentageInput").addEventListener("input", assignGrade);

