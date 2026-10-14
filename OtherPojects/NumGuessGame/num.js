const gameNames = ["High or Low", "PFZ Code"];
const gameInstructions = [
    "In High or Low, you guess the number within a range and be givenhigher or lower counting the guesses till you get the right number. The harder the difficulty the longer the range is and the less guesses you have to get the right number.",
    "In PFZ Code, you solve the code by guessing the right number combination. P stands for Perfect, F stands for Found, and Z stands for Zero. A Perfect means you guessed the right number in the right position, a Found means you guessed the right number but in the wrong position, and a Zero means you guessed the wrong number. The harder the difficulty the longer the code is and the less guesses you have to get the right code."
];
const gameLinks = ["./OtherProjects/NumGuessGame/HighOrLow.html", "./OtherProjects/NumGuessGame/PFZCode.html"];
let currentDifficulty = "Easy";
let correctNumber = 0;
let guessCount = 0;
let guessLimit = 0;
let currentCode = "";
let codeLength = 2;

function showInstructions(gameIndex) {
    document.getElementById("Instructions").innerText = gameInstructions[gameIndex];
    openPopUp("GamePopUp");
}

function switchPopUp(popUpIdClose, popUpIdOpen) {
    closePopUp(popUpIdClose);
    openPopUp(popUpIdOpen);
}

function openPopUp(popUpId) {
    document.getElementById(popUpId).style.display = "block";
}

function closePopUp(popUpId) {
    document.getElementById(popUpId).style.display = "none";
}

function startGame(gameIndex) {
    goTo(gameLinks[gameIndex]);
}

function goHome() {
    goTo("Offical-Portfolio/OtherProjects/NumGuessGame/index.html");
}

function goTo(addressLink) {
    window.location.href = addressLink;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setDifficulty(difficulty) {
    if (difficulty === "Easy") {
        currentDifficulty = "Easy";
        guessLimit = 100;
        // 1-100 range for easy difficulty
        correctNumber = randomNumber(1, 50);
        // 2-digit code for easy difficulty
        currentCode = "" + randomNumber(10, 99);
    }
    if (difficulty === "Medium") {
        currentDifficulty = "Medium";
        guessLimit = 10;
        // 1-100 range for medium difficulty
        correctNumber = randomNumber(1, 100);
        // 3-digit code for medium difficulty
        currentCode = "" + randomNumber(100, 999);
    }
    if (difficulty === "Hard") {
        currentDifficulty = "Hard";
        guessLimit = 5;
        // 1-100 range for hard difficulty
        correctNumber = randomNumber(1, 100);
        // 4-digit code for hard difficulty
        currentCode = "" + randomNumber(1000, 9999);
    }
}

function restartGames() {
    // Does not reset difficulty, just resets the game variables
    correctNumber = 0;
    guessCount = 0;
    guessLimit = 0;
    currentCode = "";
    codeLength = 2;
}