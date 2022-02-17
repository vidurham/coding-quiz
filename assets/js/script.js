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
    {question: "Who is the Yark Shark?",
    answer : "Nick",
    options : ["Joe", "Nick", "Vince", "Mitch"]},
    
    {question: "Who sprained their ankle jumping in a 4-foot pool?",
    answer: "Jess",
    options: ["Mom", "Kelly", "Eva", "Jess"]},
    
    {question: "What smelled the worst on every vacation?",
    answer: "Nick's Taint",
    options: ["Nick's Taint", "Nick's feet", "Nick's socks", "The bathroom after Joe has a turkey leg"]},

    {question: "Who is excited for Disney",
    answer: "All the Above",
    options: ["The whole famdamily", "The new dog", "Walter Disney himself", "All the Above"]},
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

startBtn.addEventListener("click", startTimer);


answersEl.addEventListener("click", nextQuestion)