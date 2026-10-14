const gameInstructions = [
    "Welcome to Bingo trivia! In this game, you will be presented with a series of trivia questions. That earn specified bingo spaces. Your goal is to answer as many questions correctly as possible. Each correct answer will get you closer to winning the game. Good luck!",
    "Welcome to Classic trivia! In this game, you will be presented with a series of trivia questions. Your goal is to answer as many questions correctly as possible. Each correct answer will get you closer to winning the game. Good luck!",
    "Welcome to Jeopardy trivia! In this game, you will be put against either a computer or another player. You will be presented with a series of trivia questions. Your goal is to answer as many questions correctly as possible. Each correct answer will get you more points the winner is the one with the most points. Good luck!"
];
// I want Jeopardy to have a random bot selected there are 3 bots and then their are 
// different traits they can have (Strategy '2', Personality '3', Knowledge '5') The player will 
// have to answer questions and the bot will answer questions as well. The bot will 
// have a random chance of getting the question right based on their knowledge trait. 
// If the Player gets it wrong or right the bot can respond with a random response 
// based on their personality trait. The bot will also have a strategy trait that will 
// determine how they answer questions (e.g. if they are aggressive they will go for the 
// high-value questions, if they are conservative they will answer the easiest questions).

const botStrategies = ["Aggressive", "Conservative"];
// Friendly Bot 
const botNiceResponcesToWrong = ["That's a good try!", "That was close!", "Keep trying!", "Don't give up!", "You'll get it next time!"];
const botNiceResponcesToRight = ["Good job!", "You're on fire!", "Keep it up!", "You're a trivia master!", "You're unstoppable!"];
// Sarcastic Bot
const botSarcasticResponcesToWrong = ["Thats definitely the right answer.", "Your so smart, you should have gotten that one.", "Wow.", "You are so going to win."];
const botSarcasticResponcesToRight = ["Lucky guess.", "I can't believe you got that right.", "You're lucky I didn't get that one.", "I can't believe you got that one right."];
// Mean Bot
const botMeanResponcesToWrong = ["Pathetic!", "You call that a guess?", "You should have studied more!", "That's not even close!", "Are you even trying?"];
const botMeanResponcesToRight = ["Wow, you got that one right?", "I guess even a broken clock is right twice a day.", "You must have cheated.", "I can't believe you got that right.", "You're still not as good as me."];

let botKnowledge = 0; // 1 being the lowest knowledge and 5 being the highest, 
// code wise it will work as a chance they get it right from 1-10 if they have a 1 then they have a 1/10 chance of getting it right, if they have a 5 then they have a 5/10 chance of getting it right.
// the range will depend on the difficulty of the question so hard questions will have a range of 1-10, medium questions will have a range of 1-8, and easy questions will have a range of 1-5. 

// scifi nature 17, math 19, mythology 20, sports 21, animals 27, cartoons 32, celebraties 26, history 23
const availibleCategories = [17, 19, 20, 21, 27, 32, 26, 23];
const categoryNames = ["Science Fiction", "Math", "Mythology", "Sports", "Animals", "Cartoons", "Celebrities", "History"];
let jeopardyTableCategories = [4, 5, 2, 3, 0]; //this is the default | Animals, Cartoons, Myths, Sports, Sci-Fi
let jeopardyRow1Answered = [false, false, false, false, false]; // false means not answered, true means answered.
let jeopardyRow2Answered = [false, false, false, false, false];
let jeopardyRow3Answered = [false, false, false, false, false];
let jeopardyRow4Answered = [false, false, false, false, false];
let jeopardyRow5Answered = [false, false, false, false, false];

const gameLinks = ["./bingo.html", "./classic.html", "./jeopardy.html"];

/* {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Animals",
      "question": "&quot;Decapods&quot; are an order of ten-footed crustaceans.  Which of these are NOT decapods?",
      "correct_answer": "Krill",
      "incorrect_answers": [
        "Lobsters",
        "Shrimp",
        "Crabs"
      ]
    },
*/

// https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple
const urlStart = "https://opentdb.com/api.php?amount="
const urlEnd = "&type=multiple"

let url = "";
let difficulty = "easy";
let category = 27;
let amount = 1;

function setDifficulty(DIFF){ difficulty = DIFF;}
function setCategory(CAT){ category = CAT;}
function setAmount(NUM){ amount = NUM;}
function setURL(){
    url = urlStart + amount + "&category=" + category + "&difficulty=" + difficulty + urlEnd;
}

function startClassicTrivia(){
    // TODO
}

function showInstructions(gameIndex) {
    const instructions = document.querySelector(".Instructions");
    instructions.textContent = gameInstructions[gameIndex];
    document.querySelector(".GamePopUp").style.display = "block";
}

function startGame(gameIndex) {
    goTo(gameLinks[gameIndex]);
}

function closePopUp(id) {
    document.querySelector("." + id).style.display = "none";
}

function switchPopUp(closeId, openId) {
    document.querySelector("." + closeId).style.display = "none";
    document.querySelector("." + openId).style.display = "block";
}

function goTo(url) {
    window.location.href = url;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchPopUp(closeId, openId) {
    document.querySelector("." + closeId).style.display = "none";
    document.querySelector("." + openId).style.display = "flex";
}