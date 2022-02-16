var startBtn = document.querySelector("#button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var commentEl = document.querySelector(".comment");
var scoreEl = document.querySelector("#score")
var userScoreEl = document.querySelector(".user-score")
var secondsLeft = 75;
var questionNumber = -1;


var questions = [
    {question: "What is my favorite animal?",
    answer : "Piggy",
    options : ["Crocodile", "Piggy", "Doggy", "Dolphin"]},
    
    {question: "What is my favorite bar in Charlotte?",
    answer: "Gin Mill",
    options: ["Brickyard", "Slate", "Tavern on the Tracks", "Gin Mill"]},
    
    {question: "What could I really go for right now?",
    answer: "A run",
    options: ["Ice Cream", "Water", "Tacos", "A run"]},

    {question: "What are you waiting for?",
    answer: "Something amazing, I guess",
    options: ["Something amazing, I guess", "The world to change", "The Weekend", "Death"]},
]

var startTimer = function () {
    homeEl.classList.add("gone");
    quizEl.classList.remove("gone");

    setTimer();
    makeQuiz();
}

function setTimer () {
    var count = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length){
            clearInterval(count);
            setTimeout(displayScore, 500)

        }
    }, 1000);
}

function makeQuiz () {
    questionNumber++;
    answer = questions[questionNumber].answer;

    questionEl.textContent = questions[questionNumber].question;
    answersEl.innerHTML = "";

    var options = questions[questionNumber].options;

    for (var i = 0; i < options.length; i++) {
        var nextChoice = document.createElement("button");
        nextChoice.textContent = options[i];
        answerBtn = answersEl.appendChild(nextChoice).setAttribute("class", "option")
    }
}

function hideComment() {
    commentEl.style.display = "none";
}

function showComment() {
    commentEl.removeAttribute("style");
}

var nextQuestion = function (event) {
    if (answer === event.target.textContent) {
        commentEl.innerHTML = "Correct!!";
        setTimeout(hideComment,1225);
        showComment();
    }
    else {
        commentEl.innerHTML = "Wrong!!";
        setTimeout(hideComment,1225);
        secondsLeft = secondsLeft - 20;
        showComment();
    }

    makeQuiz();
}

function displayScore() {
    quizEl.classList.add("gone")
    scoreEl.classList.remove("gone")
    userScoreEl.textContent = "Final Score: " + secondsLeft;
}

startBtn.addEventListener("click", startTimer);


answersEl.addEventListener("click", nextQuestion)