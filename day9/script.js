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
    let input = document.getElementById('inputText').value;
    let words = input.split(' ');
    let seen = {};
    let result = [];

    for (let word of words) {
        if (seen[word]) {
            result.push('CHANGED');
        } else {
            result.push(word);
            seen[word] = true;
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

function removeDuplicateCharacters() {
    let sentenceInput = document.getElementById('sentenceInput').value;
    let result = '';
    let seen = '';

    for (let i = 0; i < sentenceInput.length; i++) {
        let char = sentenceInput[i];
        if (seen.indexOf(char) === -1) {  
            seen += char;
            result += char;
        }
    }

    document.getElementById('outputResult').innerHTML =  result;
}