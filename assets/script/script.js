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
var q = -1;
var sinoEl = document.getElementById("sino");
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
    // question1();
  }
});

function gametime() {
  button1El.removeAttribute("class");
  button2El.removeAttribute("class");
  button3El.removeAttribute("class");

  setTime();
  question()
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

// wrong answers move to the next question
// use function question to populate the questions

function question() {
  q++
  sinoEl.textContent = "";
  questionEl.textContent = questions[q].title
  button1El.textContent = questions[q].choices[0]
  button2El.textContent = questions[q].choices[1]
  button3El.textContent = questions[q].choices[2]
  button4El.textContent = questions[q].choices[3]
  answer()
}

function answer() {
  gameAreaEl.addEventListener("click", function (event) {
    var element = event.target;
    console.log(element);
    var quick = 3;
    if (element.matches("button")) {
      if (element.value === questions[q].answer) {
        sinoEl.textContent = "Correct!!"
        // question()
      } else {
        sinoEl.textContent = "wrong"
        wrongAnswer()
        // question()
      }

    }
  });

}




//     questionEl.textContent = "what does JS stand for?";
//     button1El.textContent = "Java Sauce";
//     button2El.textContent = "Javas";
//     button3El.textContent = "Java Source";
//     button4El.textContent = "Java Script";

//     button4El.addEventListener("click", function (event) {
//         event.preventDefault();
//         button4El.setAttribute("style", "background: green");
//         button4El.textContent = "Correct!!";
//         question2();
//     })
//     button1El.addEventListener("click", function (event) {
//         event.preventDefault();
//         button1El.setAttribute("style", "background: red");
//         button1El.textContent = "False!";
//         wrongAnswer();
//     })
//     button2El.addEventListener("click", function (event) {
//         event.preventDefault();
//         button2El.setAttribute("style", "background: red");
//         button2El.textContent = "False!";
//         wrongAnswer();
//     })
//     button3El.addEventListener("click", function (event) {
//         event.preventDefault();
//         button3El.setAttribute("style", "background: red");
//         button3El.textContent = "False!";
//         wrongAnswer();
//     })
// }


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
