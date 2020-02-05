var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question")
var button1El = document.getElementById("button1")
var button2El = document.getElementById("button2")
var button3El = document.getElementById("button3")
var button4El = document.getElementById("button4")
var gameAreaEl = document.getElementById("gameArea")
var scoreAreaEl = document.getElementById("scoreArea")
var submitScoreBtn = document.getElementById("submitScore")
var scoreEl = document.getElementById("score")



var secondsLeft = 6;

gameAreaEl.addEventListener("click", function () {
    if (questionEl.textContent === "Coding quiz game!") {
        gametime();
        // question1();
    }
});

function gametime() {
    button1El.style.display = "inline";
    button2El.style.display = "inline";
    button3El.style.display = "inline";

    setTime();
    question1()
    function setTime() {

        var intervalId = setInterval(function () {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 10) {
                timerEl.setAttribute("style", "color:red")
            }
            if (secondsLeft <= 0) {
                clearInterval(intervalId);
                endOfGame()
            }
        }, 1000);

    }

}

function question1() {
    questionEl.textContent = "what does JS stand for?";
    button1El.textContent = "Java Sauce";
    button2El.textContent = "Javas";
    button3El.textContent = "Java Source";
    button4El.textContent = "Java Script";

    button4El.addEventListener("click", function (event) {
        event.preventDefault();
        button4El.setAttribute("style", "background: green");
        button4El.textContent = "Correct!!";
        question2();
    })
    button1El.addEventListener("click", function (event) {
        event.preventDefault();
        button1El.setAttribute("style", "background: red");
        button1El.textContent = "False!";
        wrongAnswer();
    })
    button2El.addEventListener("click", function (event) {
        event.preventDefault();
        button2El.setAttribute("style", "background: red");
        button2El.textContent = "False!";
        wrongAnswer();
    })
    button3El.addEventListener("click", function (event) {
        event.preventDefault();
        button3El.setAttribute("style", "background: red");
        button3El.textContent = "False!";
        wrongAnswer();
    })
}


function wrongAnswer() {
    console.log(secondsLeft);
    (secondsLeft = secondsLeft - 5);
    console.log(secondsLeft);
}

function endOfGame() {
    gameAreaEl.style.display = "none";
    scoreAreaEl.style.display = "block";
    scoreEl.textContent = secondsLeft
    submitScoreBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var score = (document.getElementById("playerName").value + "  " + secondsLeft)
        console.log(score)
        localStorage.setItem("1st", score);
    })
    
}








