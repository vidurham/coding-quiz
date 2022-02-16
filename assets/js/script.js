var startBtn = document.querySelector(".start-btn button");
var timerEl = document.querySelector("#seconds");
var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var secondsLeft = 75


var questions = [
    {}
]

var startTimer = function () {
    homeEl.classList.add("gone");
    quizEl.classList.remove("gone");

    setTimer()
}

function setTimer () {
    var count = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time Left: " + secondsLeft;
    }, 1000)
}

startBtn.addEventListener("click", startTimer);