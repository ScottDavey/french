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

    // Loop over Verbs.
    for (let i = 0; i <= numberOfVerbs; i++) {
        const randomIntV = rando(0, verbs.length - 1);
        finalWordSelection.verbs.push(verbs[randomIntV]);
    }

    // Loop over Non-Verb Words
    for (let i = 0; i <= numberOfNonVerbs; i++) {
        const randomIntW = rando(0, words.length - 1);
        finalWordSelection.words.push(words[randomIntW]);
    }

    displayRandomWords(finalWordSelection);
}

function displayRandomWords(wordList = { verbs: [], words: [] }) {
    const wordEl = document.querySelector('.pageSide.right');
    // Clear container
    wordEl.innerHTML = '';

    // Loop over verbs
    for (const v of wordList.verbs) {
        const componentV = `
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
        // Append the new element
        wordEl.innerHTML += componentV;
    }

    // Loop over words
    for (const w of wordList.words) {
        const componentW = `
            <div class="component long">
                <div class="topBar">
                    <div class="type">WORD</div>
                    <div class="group">&nbsp;</div>
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
        // Append the new element
        wordEl.innerHTML += componentW;
    }
}

function main() {
    const btn = document.getElementById('randomBtn');
    btn.addEventListener('click', getRandomWords);
}