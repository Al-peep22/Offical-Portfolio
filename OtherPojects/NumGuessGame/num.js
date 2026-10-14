const gameNames = ["High or Low", "PFZ Code"];
const gameInstructions = [
    "In High or Low, you guess the number within a range and be givenhigher or lower counting the guesses till you get the right number. The harder the difficulty the longer the range is and the less guesses you have to get the right number.",
    "In PFZ Code, you solve the code by guessing the right number combination. P stands for Perfect, F stands for Found, and Z stands for Zero. A Perfect means you guessed the right number in the right position, a Found means you guessed the right number but in the wrong position, and a Zero means you guessed the wrong number. The harder the difficulty the longer the code is and the less guesses you have to get the right code."
];
const gameLinks = ["C:/ImportantDocuments/Career/Portfolio/Offical-Portfolio/OtherPojects/NumGuessGame/HighOrLow.html", 
    "C:/ImportantDocuments/Career/Portfolio/Offical-Portfolio/OtherPojects/NumGuessGame/PFZCode.html"];
// =========================
// GLOBAL GAME VARIABLES
// =========================
let currentDifficulty = "Easy";
let correctNumber = 0;
let guessCount = 0;
let guessLimit = 0;
let limitedGuesses = true;
let gameActive = false;

// =========================
// POPUP SYSTEM
// =========================
function showInstructions(gameIndex) {
    const instructions = document.querySelector(".Instructions");
    instructions.textContent = gameInstructions[gameIndex];
    document.querySelector(".GamePopUp").style.display = "block";
}

function closePopUp(id) {
    document.querySelector("." + id).style.display = "none";
}

function switchPopUp(closeId, openId) {
    document.querySelector("." + closeId).style.display = "none";
    document.querySelector("." + openId).style.display = "block";
}

function startGame(gameIndex) {
    goTo(gameLinks[gameIndex]);
}

function goTo(url) {
    window.location.href = url;
}

function goHome() {
    goTo("C:/ImportantDocuments/Career/Portfolio/Offical-Portfolio/OtherPojects/NumGuessGame/index.html");
}

// =========================
// DIFFICULTY SETTINGS
// =========================
function setDifficulty(level) {
    currentDifficulty = level;

    if (level === "Easy") {
        guessLimit = 100;
        correctNumber = randomNumber(1, 50);
    }
    if (level === "Medium") {
        guessLimit = 10;
        correctNumber = randomNumber(1, 100);
    }
    if (level === "Hard") {
        guessLimit = 5;
        correctNumber = randomNumber(1, 100);
    }

    guessCount = 0;
    gameActive = true;

    document.querySelector(".HLFeedback").textContent = "";
}

// =========================
// LIMIT GUESSES TOGGLE
// =========================
function setGuessLimit(onOff) {
    limitedGuesses = onOff === "On";
}

// =========================
// RANDOM NUMBER GENERATOR
// =========================
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =========================
// SUBMIT GUESS
// =========================
function submitHLGuess() {
    if (!gameActive) return;

    const guessInput = document.getElementById("HLGuessInput");
    const feedback = document.querySelector(".HLFeedback");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    guessCount++;

    if (guess === correctNumber) {
        feedback.textContent =
            `Correct! The number was ${correctNumber}. You used ${guessCount} guesses.`;
        gameActive = false;
        return;
    }

    if (limitedGuesses && guessCount >= guessLimit) {
        feedback.textContent =
            `Game Over! You ran out of guesses. The number was ${correctNumber}.`;
        gameActive = false;
        return;
    }

    if (guess < correctNumber) {
        feedback.textContent =
            `Higher! You have ${guessLimit - guessCount} guesses left.`;
    } else {
        feedback.textContent =
            `Lower! You have ${guessLimit - guessCount} guesses left.`;
    }
}

// =========================
// RESET GAME
// =========================
function resetHLGame() {
    guessCount = 0;
    gameActive = true;

    // Regenerate number based on difficulty
    setDifficulty(currentDifficulty);

    document.querySelector(".HLFeedback").textContent = "";
    document.getElementById("HLGuessInput").value = "";
}


// =========================
// EXIT GAME
// =========================
function exitHLGame() {
    // Hide game, show menu
    document.querySelector(".HLGame").style.display = "none";
    document.querySelector(".GameOptions").style.display = "flex";
}


function startHLGame() {
    switchPopUp('HLOptions', 'HLGame');

    if (currentDifficulty === "Easy") {
        correctNumber = randomNumber(1, 100);
        guessLimit = 100;
    }
    if (currentDifficulty === "Medium") {
        correctNumber = randomNumber(1, 100);
        guessLimit = 10;
    }
    if (currentDifficulty === "Hard") {
        correctNumber = randomNumber(1, 100);
        guessLimit = 5;
    }

    guessCount = 0;
    gameActive = true;
}

// =========================
// GENERATE PFZ CODE
// =========================
function generatePFZCode() {
    switchPopUp('PFZOptions','PFZGame')

    if (currentDifficulty === "Easy") {
        currentCode = randomNumber(10, 99).toString();
        guessLimit = 100;
    }
    if (currentDifficulty === "Medium") {
        currentCode = randomNumber(100, 999).toString();
        guessLimit = 10;
    }
    if (currentDifficulty === "Hard") {
        currentCode = randomNumber(1000, 9999).toString();
        guessLimit = 5;
    }

    guessCount = 0;
    gameActive = true;
}

// =========================
// SUBMIT PFZ GUESS
// =========================
function submitPFZGuess() {
    if (!gameActive) return;

    const input = document.getElementById("PFZGuessInput");
    const feedback = document.querySelector(".PFZFeedback");
    const guess = input.value;

    if (guess.length !== currentCode.length) {
        feedback.textContent = `Enter a ${currentCode.length}-digit code.`;
        return;
    }

    guessCount++;

    let result = "";

    for (let i = 0; i < currentCode.length; i++) {
        if (guess[i] === currentCode[i]) {
            result += "P "; // Perfect
        } else if (currentCode.includes(guess[i])) {
            result += "F "; // Found
        } else {
            result += "Z "; // Zero
        }
    }

    feedback.textContent = result;

    if (guess === currentCode) {
        feedback.textContent =
            `Correct! The code was ${currentCode}. You solved it in ${guessCount} guesses.`;
        gameActive = false;
        return;
    }

    if (limitedGuesses && guessCount >= guessLimit) {
        feedback.textContent =
            `Game Over! You ran out of guesses. The code was ${currentCode}.`;
        gameActive = false;
    }
}

function resetPFZGame() {
    guessCount = 0;
    gameActive = true;
    generatePFZCode();
    document.querySelector(".PFZFeedback").textContent = "";
    document.getElementById("PFZGuessInput").value = "";
}

function switchPopUp(closeId, openId) {
    document.querySelector("." + closeId).style.display = "none";
    document.querySelector("." + openId).style.display = "flex";
}
