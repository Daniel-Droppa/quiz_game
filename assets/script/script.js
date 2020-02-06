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
var q = 0;
var correctness = document.getElementById('correctness')
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];



var secondsLeft = 60;

gameAreaEl.addEventListener("click", function () {
  if (questionEl.textContent === "Coding quiz game!") {
    gametime();
   
  }
});
var intervalId
function gametime() {
  button1El.removeAttribute("class");
  button2El.removeAttribute("class");
  button3El.removeAttribute("class");

  setTime();
  question()
  function setTime() {

    intervalId = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
      if (secondsLeft <= 10) {
        timerEl.setAttribute("style", "color:red")
      }
      if (secondsLeft <= 0) {

        endOfGame()
      }
    }, 1000);

  }

}





function question() {
  console.log(q)

  questionEl.textContent = questions[q].title
  for (let i = 0; i < questions[q].choices.length; i++) {
    eval('button' + (i + 1) + 'El').textContent = questions[q].choices[i]
  }
  gameAreaEl.addEventListener("click", answer);
}
function answer(event) {
  var element = event.target;
  console.log(element);

  if (element.matches("button")) {
    if (element.textContent === questions[q].answer) {
      correctness.style.color = 'green'
      correctness.textContent = "Correct!!"

    } else {
      correctness.style.color = 'red'
      correctness.textContent = "wrong"
      wrongAnswer()

    }
    setTimeout(() => {
      correctness.innerHTML = ''
    }, 3000)
    q++
    if (q === questions.length) endOfGame()
    else question()
  }
}
function wrongAnswer() {
  (secondsLeft = secondsLeft - 10);
}

function endOfGame() {
  var allScores = JSON.parse(localStorage.getItem("highscores"))
  if(!allScores) allScores =[]

  clearInterval(intervalId);
  gameAreaEl.style.display = "none";
  scoreAreaEl.style.display = "block";
  scoreEl.textContent = secondsLeft
  submitScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var score = {score :secondsLeft, intials: document.getElementById("playerName").value.trim()};
    console.log(allScores);
    allScores.push(score);
    localStorage.setItem("highscores", JSON.stringify(allScores));
    window.location.assign("highscore.html")
  })

}
