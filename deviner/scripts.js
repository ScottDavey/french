function rando(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function start(startButton, hintButton) {
    startButton.style.display = 'none';
    hintButton.style.display = 'inline';

    next();
}

function next() {
    const totalScoreEl = document.getElementById('totalWords');
    const totalScore = +totalScoreEl.textContent;

    // Increment the total words count (total score)
    totalScoreEl.innerHTML = totalScore + 1;

    // Clear previous answer
    document.querySelector('#wordSection #userInput #inputField').value = '';
    // Clear hint flag
    document.querySelector('#hasUsedHint').value = 0;
    // Set user score back to normal (if hint was used)
    const playerGuesses = document.getElementById('playerGuesses');
    playerGuesses.style.textDecoration = 'none';
    playerGuesses.style.color = '#222831';

    // find a random word and set up the word section:
    //      Because we have two files (verbs and words), we have to get fancy
    //      First we'll get a random number between 1 and 100.
    //      If the number is even, choose a word. If it's odd, choose a verb
    //      Next choose another random number between 0 and the len of the chosen type options
    //      Lastly, choose the work and set up the Word Section
    const randomTypeVal = rando(1, 100);
    const wordType = (randomTypeVal % 2 === 0) ? 'VERB' : 'MOT';
    const wordList = (wordType === 'VERB') ? verbs : words;
    const randomVal = rando(0, (wordList.length) - 1);
    const randomWord = wordList[randomVal];
    
    // Get all our elements and populate
    document.querySelector('#wordSection #topBar #type').innerHTML = wordType;
    document.querySelector('#wordSection #topBar #group').innerHTML = (wordType === 'VERB') ? randomWord.group : randomWord.gender;
    document.querySelector('#wordSection #mid #clueText').innerHTML = randomWord.en;
    document.querySelector('#wordSection #userInput #answer').value = randomWord.fr;

    const bottomBar = document.querySelector('#wordSection #bottomBar');

    if (wordType === 'MOT' && randomWord.note) {
        bottomBar.style.display = 'block';
        bottomBar.innerHTML = randomWord.note;
    } else {
        bottomBar.style.display = 'none';
    }

}

function validate() {
    const inputFieldEl = document.querySelector('#wordSection #userInput #inputField');
    const inputFieldVal = inputFieldEl.value;
    const answer = document.querySelector('#wordSection #userInput #answer').value;

    if (inputFieldVal.toLowerCase() === answer.toLowerCase()) {
        const hasUsedHint = +document.querySelector('#hasUsedHint').value;
        
        // If the uses a hint, don't add a point
        if (!hasUsedHint) {
            const userScoreEl = document.querySelector('#gameScore #playerGuesses');
            const userScore = +(userScoreEl.textContent || 0);
            userScoreEl.innerHTML = userScore + 1;
        }
        
        // Show field as green (good!)
        inputFieldEl.style.backgroundColor = '#24de4c';

        // After a second, set back to normal BG color and get next word
        window.setTimeout(() => {
            inputFieldEl.style.backgroundColor = '#EEEEEE';
            next();
        }, 500);
    } else {
        // Add red error border
        inputFieldEl.style.backgroundColor = '#E23E57';
    }
}

function reset(startButton, hintButton) {
    const score = document.querySelectorAll('.score');
    
    // Reset buttons
    startButton.style.display = 'inline';
    hintButton.style.display = 'none';

    // Set user score back to normal (if hint was used)
    const playerGuesses = document.getElementById('playerGuesses');
    playerGuesses.style.textDecoration = 'none';
    playerGuesses.style.color = '#222831';

    // Reset hint
    document.querySelector('#hasUsedHint').value = 0;

    // clear word section
    document.querySelector('#wordSection #topBar #type').innerHTML = '&nbsp;';
    document.querySelector('#wordSection #topBar #group').innerHTML = '&nbsp;';
    document.querySelector('#wordSection #mid #clueText').innerHTML = '&nbsp;';
    document.querySelector('#wordSection #userInput #answer').value = '&nbsp;';
    document.querySelector('#wordSection #bottomBar').style.display = 'none';

    // Reset Score
    for (const scoreEl of score) {
        scoreEl.innerHTML = '0';
    }
}

function hint() {
    const answer = document.querySelector('#wordSection #userInput #answer').value;
    const hintText = document.querySelector('#hintSection #hintText');

    // Set flag to prevent point
    document.querySelector('#hasUsedHint').value = 1;
    // Show user score as disabled
    const playerGuesses = document.getElementById('playerGuesses');
    playerGuesses.style.color = '#bb9a4d';
    playerGuesses.style.textDecoration = 'line-through';

    // Set hint text to show answer
    hintText.innerHTML = answer;

    // Show hint text element
    hintText.style.display = 'block';

    // hide after 2 seconds
    window.setTimeout(() => {
        hintText.style.display = 'none';
    }, 2000);
}

function addFrenchChar(char) {
    const inputField = document.querySelector('#wordSection #userInput #inputField');
    let strPos = 0;
    strPos = inputField.selectionStart;

    const front = (inputField.value).substring(0, strPos);
    const back = (inputField.value).substring(strPos, inputField.value.length);
    inputField.value = front + char + back;
    strPos = strPos + char.length;

    inputField.selectionStart = strPos;
    inputField.selectionEnd = strPos;
    inputField.focus();
}

function main() {
    const startButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextButton');
    const resetButton = document.getElementById('resetButton');
    const hintButton = document.getElementById('hintButton');
    const altCodes = document.getElementsByClassName('code');

    startButton.addEventListener('click', () => { start(startButton, nextButton) });
    nextButton.addEventListener('click', next);
    resetButton.addEventListener('click', () => { reset(startButton, nextButton) });
    hintButton.addEventListener('click', hint);
    
    for (const code of altCodes) {
        code.addEventListener('click', (charEl) => { addFrenchChar(code.textContent.toLowerCase()); });
    }

    document.addEventListener('keydown', (event) => {
        const inputField = document.querySelector('#wordSection #userInput #inputField');
        const activeElem = document.activeElement;
        if (activeElem === inputField && event.code === 'Enter') {
            validate();
        }
    });
}