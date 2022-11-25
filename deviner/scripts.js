//GLOBAL (bad)
let WORD_LIST = [];

function rando(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function start(startButton, hintButton) {
    startButton.style.display = 'none';
    hintButton.style.display = 'inline';

    // populate our word list
    // Add verbs
    for (const v of verbs) {
        WORD_LIST.push(
            {
                wordType: 'VERB',
                ...v,
            }
        );
    }

    // Add words
    for (const w of words) {
        WORD_LIST.push(
            {
                wordType: 'MOT',
                ...w,
            }
        );
    }

    // update the Total Words indicator
    document.querySelector('#totalWordsDiv #totalWords').innerHTML = WORD_LIST.length - 1;

    next();
}

function next() {

    // If our WORD_LIST is empty, we're done!

    const totalScoreEl = document.getElementById('totalWordsGuessed');
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

    // Find a random word and set up the work selection:
    //      pick a random number between 0 and the total 
    //      length of the WORD_LIST array.
    //      After getting a random word, we'll remove it from the WORD_LIST

    // Get a random number, then word
    const randomWordNum = rando(0, (WORD_LIST.length - 1));
    const randomWord = WORD_LIST[randomWordNum];
    // Remove word from WORD_LIST
    WORD_LIST = WORD_LIST.filter((curVal, i) => i !== randomWordNum);
    
    // Get all our elements and populate
    document.querySelector('#wordSection #topBar #type').innerHTML = randomWord.wordType;
    document.querySelector('#wordSection #topBar #group').innerHTML = (randomWord.wordType === 'VERB') ? randomWord.group : randomWord.gender;
    document.querySelector('#wordSection #mid #clueText').innerHTML = randomWord.en;
    document.querySelector('#wordSection #userInput #answer').value = randomWord.fr.trim();

    const bottomBar = document.querySelector('#wordSection #bottomBar');

    if (randomWord.wordType === 'MOT' && randomWord.note) {
        bottomBar.style.display = 'block';
        bottomBar.innerHTML = randomWord.note;
    } else {
        bottomBar.style.display = 'none';
    }

}

function validate() {
    const inputFieldEl = document.querySelector('#wordSection #userInput #inputField');
    const inputFieldVal = inputFieldEl.value.trim();
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

    // Clear previous answer
    document.querySelector('#wordSection #userInput #inputField').value = '';

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

    // reset word_list
    WORD_LIST = [];
}

function stats() {
    const statsOverlay = document.querySelector('#statsOverlay');
    const statsMid = document.querySelector('#statsOverlay #mid');
    const playerGuesses = +document.querySelector('#gameScore #playerGuesses').textContent;
    const totalWordsGuessed = +document.querySelector('#gameScore #totalWordsGuessed').textContent;
    const totalWordList = +document.querySelector('#totalWords').textContent;
    const content = `
        <p>Résponses Correctes: ${playerGuesses | 0}</p>
        <p>Mots Devinés: ${totalWordsGuessed}</p>
        <p>Mots Restants: ${totalWordList - totalWordsGuessed}</p>
        <p>Nombre Total de Mots: ${totalWordList}</p>
    `;

    // Empty what once was
    statsMid.innerHTML = '';

    // Replace what is to be
    statsMid.innerHTML = content;

    // Reveal the truth
    statsOverlay.style.display = 'block';
}

function closeStats() {
    document.querySelector('#statsOverlay').style.display = 'none';
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
    }, 3000);
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
    const statButton = document.querySelector('#totalWordStats #statButtonDiv #statButton');
    const statClostButton = document.querySelector('#statsOverlay #statDialog #bottomBar #statsClose');

    startButton.addEventListener('click', () => { start(startButton, nextButton) });
    nextButton.addEventListener('click', next);
    resetButton.addEventListener('click', () => { reset(startButton, nextButton) });
    hintButton.addEventListener('click', hint);
    statButton.addEventListener('click', stats);
    statClostButton.addEventListener('click', closeStats);
    
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