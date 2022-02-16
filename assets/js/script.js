var startBtn = document.querySelector("#button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var commentEl = document.querySelector(".comment");
var secondsLeft = 75;
var questionNumber = -1;


var questions = [
    {question: "What is my Name?",
    answer : "Vincent",
    options : ["Richard", "Vincent", "Doug", "Bo"]},

    {question: "What do I do?",
    answer : "Fly Drones",
    options : ["Fly Drones", "Eat", "Pray", "Love"]
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
    answersEl.innerHTML = "";

    var options = questions[questionNumber].options;

    for (var i = 0; i < options.length; i++) {
        var nextChoice = document.createElement("button");
        nextChoice.textContent = options[i];
        answerBtn = answersEl.appendChild(nextChoice).setAttribute("class", "option")
    }
}

var nextQuestion = function (event) {
    if (answer === event.target.textContent) {
        commentEl.innerHTML = "Correct!!";
    }
    else {
        commentEl.innerHTML = "Wrong!!"
    }

    makeQuiz();
}

startBtn.addEventListener("click", startTimer);


answersEl.addEventListener("click", nextQuestion)