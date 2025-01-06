function checkEvenOdd() {
    const number = document.getElementById("numberInput").value;
    let result;
    if (number % 2 == 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    document.getElementById("result").innerHTML = result;
}

function printNumbers() {
    let numbers = "";
    for (let i = 1; i <= 10; i++) {
        numbers += i + " ";
    }
    document.getElementById("numberList").textContent = numbers;
}

function printMultiples() {
    const number = parseInt(document.getElementById("inputNumber").value);
    let multiples = "";
    for (let i = 1; i <= 30 / number; i++) {
        multiples += (number * i) + " ";
    }
    document.getElementById("multiplesList").textContent = multiples;
}

function checkPrime() {
    let number = document.getElementById("primeInput").value;
    let result = document.getElementById("primeAnswer");
    if (number <= 1) {
        result.innerHTML = "Not Prime";
        return;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result.innerHTML = "Not Prime";
            return;
        }
    }
    result.innerHTML = "Prime";
}

function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    document.getElementById("sumResult").textContent = "Sum: " + sum;
}

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

function countVowels() {
    const str = document.getElementById("inputString").value;
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    document.getElementById("vowelCount").innerText =  count;
}

function printTriangle() {
    let pattern = "";
    let rows = 5; 
    for (let i = 1; i <= rows; i++) {
        pattern += "*".repeat(i) + "\n";
    }
    document.getElementById("pattern").innerText = pattern;
}

function fizzBuzz() {
    let result = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            result += "Fizz\n";
        } else if (i % 5 === 0) {
            result += "Buzz\n";
        } else {
            result += i + "\n";
        }
    }
    document.getElementById("output").innerText = result;
}

function reverseString() {
    const str = document.getElementById("inputString").value;
    let reversed = "";
    for(let i=a.length;i>=0;i--){
        reversed+=a.charAt(i);
    }
    document.getElementById("reversedString").innerHTML=reversed;
}