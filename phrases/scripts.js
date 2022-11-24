function rando(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomWords() {
    const numberOfWords = document.getElementById('wordNumberInput').value;
    const numberOfVerbs = parseInt(numberOfWords * 0.3, 10); // 30% - convert to int
    const numberOfNonVerbs = numberOfWords - numberOfVerbs;
    const finalWordSelection = {
        verbs: [],
        words: [],
    };
    const randomVerbIndecies = [];
    const randomWordIndecies = [];
    const errorMsgEl = document.getElementById('errorMsg');

    // Validate the number - make sure it's not higher than the total number of words
    if (numberOfWords > verbs.length + 1 || numberOfWords > words.length + 1) {
        errorMsgEl.style.display = 'inline';
        return;
    } else {
        errorMsgEl.style.display = 'none';
    }

    // Loop over number of Verbs and get unique values
    for (let i = 0; i < numberOfVerbs; i++) {
        let randomV = rando(0, verbs.length -1);
        
        // Make sure it's unique. If not, get another one
        while (randomVerbIndecies.includes(randomV)) {
            randomV = rando(0, verbs.length -1);
        }

        randomVerbIndecies.push(randomV);
    }

    // Loop over number of words and get unique value
    for (let j = 0; j < numberOfNonVerbs; j++) {
        let randomW = rando(0, words.length - 1);

        // Make sure it's unique. If not, get another one
        while (randomWordIndecies.includes(randomW)) {
            randomW = rando(0, words.length - 1);
        }

        randomWordIndecies.push(randomW);
    }

    // Loop over Verbs.
    for (const vIndex of randomVerbIndecies) {
        finalWordSelection.verbs.push(verbs[vIndex]);
    }

    // Loop over Non-Verb Words
    for (const wIndex of randomWordIndecies) {
        finalWordSelection.words.push(words[wIndex]);
    }

    displayRandomWords(finalWordSelection);
}

function displayRandomWords(wordList = { verbs: [], words: [] }) {
    const wordEl = document.querySelector('.pageSide.right');
    // Clear container
    wordEl.innerHTML = '';

    // Start of word section
    let componentV = `<div class="wordSection">`;

    // Loop over verbs
    for (const v of wordList.verbs) {
        // Create new component element
        componentV += `
            <div class="component">
                <div class="topBar">
                    <div class="type">VERB</div>
                    <div class="group">${v.group}</div>
                </div>
                <div class="mid">
                    <div class="fr">${v.fr}</div>
                    <div class="en">${v.en}</div>
                </div>
            </div>
        `;
    }

    // End word section
    componentV += `</div>`;

    // Append the new element
    wordEl.innerHTML += componentV;

    // Strart of next word section
    let componentW = `<div class="wordSection">`;

    // Loop over words
    for (const w of wordList.words) {
        componentW += `
            <div class="component long">
                <div class="topBar">
                    <div class="type">MOT</div>
                    <div class="group">${w.gender}</div>
                </div>
                <div class="mid">
                    <div class="fr">${w.fr}</div>
                    <div class="en">${w.en}</div>
                </div>
                ${
                    w.note ?
                        '<div class="bottomBar">*' + w.note + '</div>' :
                        '&nbsp;'
                }
            </div>
        `;
    }

    // End of word section
    componentW += `</div>`;

    // Append the new element
    wordEl.innerHTML += componentW;
}

function main() {
    const btn = document.getElementById('randomBtn');
    btn.addEventListener('click', getRandomWords);
}