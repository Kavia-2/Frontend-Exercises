function findLargestWord(str) {
    let words = str.split(' ');
    let largestWord = "";
    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}

function displayLargestWord() {
    let input = document.getElementById('inputText').value;
    let result = findLargestWord(input);
    document.getElementById('result').textContent =  result;
}


function replaceNamesWithChanged() {
    let input = document.getElementById('input').value;
    let words = input.split(' ');
    let rep = {};
    let result = [];

    for (let word of words) {
        if (rep[word]) {
            result.push('CHANGED');
        } else {
            result.push(word);
            rep[word] = true;
        }
    }
    document.getElementById('modifiedSentence').textContent =  result.join(' ');
}


function replaceEvenIndexedWords() {
    let inputText = document.getElementById('sentenceInput').value;
    let words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            words[i] = 'EVEN';
        }
    }
    document.getElementById('resultOutput').textContent =  words.join(' ');
}

function removeDuplicates() {
    const inputText = document.getElementById("text").value;
    let output_res = "";

    for (let i = 0; i < inputText.length; i++) {
        if (output_res.indexOf(inputText[i]) === -1) {
            output_res += inputText[i];
        }
    }
    document.getElementById("Result").innerText = output_res;
}