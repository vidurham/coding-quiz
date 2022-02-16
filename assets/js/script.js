var startBtn = document.querySelector(".start-btn button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var secondsLeft = 75;
var questionNumber = -1;


var questions = [
    {question: "What is my Name?",
    answer : "Vincent",
    options : ["Richard", "Vincent", "Doug", "Bo"]
}
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

        }
    }, 1000);
}

function makeQuiz () {
    questionNumber++;
    answer = questions[questionNumber].answer;

    questionEl.textContent = questions[questionNumber].question;

    var options = questions[questionNumber].options;

    for (var i = 0; i < options.length; i++) {
        var nextChoice = document.createElement("button");
        nextChoice.textContent = options[i];
        answerBtn = answersEl.appendChild(nextChoice)
    }
}


startBtn.addEventListener("click", startTimer);