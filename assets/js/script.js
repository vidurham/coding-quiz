var startBtn = document.querySelector("#button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var commentEl = document.querySelector(".comment");
var scoreEl = document.querySelector("#score");
var userScoreEl = document.querySelector(".user-score");
var resetBtn = document.querySelector("#reset");
var saveBtn = document.querySelector("#savescore");
var userName = document.querySelector("#username")
var secondsLeft = 75;
var questionNumber = -1;




var questions = [
    {question: "What Disney movie takes place in the fictional San Fransokyo?",
    answer : "Big Hero 6",
    options : ["Peter Pan", "Big Hero 6", "Fantasia", "Toy Story"]},
    
    {question: "In Disney's Frozen, the name of the reindeer is?",
    answer: "Sven",
    options: ["Sven", "George", "Elsa", "Iago"]},
    
    {question: "Who wrote the soundtrack to Tarzan?",
    answer: "Phil Collins",
    options: ["Walt Disney", "Ludwig van Beethoven", "Kanye West", "Phil Collins"]},

    {question: "What is the name of the main rat in Ratatouille?",
    answer: "Remy",
    options: ["Gusteau", "Joc", "Remy", "Alfredo"]},

    {question: "Finish the Line: 'Ride like the wind, ________' (Toy Story 2)" ,
    answer: "Bullseye",
    options: ["Lightyear", "Gunslinger", "Cowboy", "Bullseye"]},
]

var restartQuiz = function() {
    scoreEl.classList.add("gone")
    homeEl.classList.remove("gone")
}

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
        secondsLeft = secondsLeft - 10;
        showComment();
    }

    makeQuiz();
}

function displayScore() {
    quizEl.classList.add("gone")
    scoreEl.classList.remove("gone")
    userScoreEl.textContent = "Final Score: " + secondsLeft;
}

function submitHighScore() {
    var name = userName.value
    if (name === null) {
        alert("No intials entered")
    }
    else {
        var finalScore = {
            initials: name,
            score: secondsLeft,
        }
        var highScoresList = localStorage.getItem("highScoresList");
        if (highScoresList === null) {
            highScoresList = [];
        }
        else {
            highScoresList = JSON.parse(highScoresList);
        }
        highScoresList.push(finalScore);
        var newScore = JSON.stringify(highScoresList);
        localStorage.setItem("highScoresList", newScore)
    }
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", restartQuiz);
saveBtn.addEventListener("click", submitHighScore)
answersEl.addEventListener("click", nextQuestion);