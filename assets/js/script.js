var startBtn = document.querySelector(".start-btn button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");


var questions = [
    {}
]

var startTimer = function () {
    homeEl.classList.add("gone");
    quizEl.classList.remove("gone");
}

startBtn.addEventListener("click", startTimer);