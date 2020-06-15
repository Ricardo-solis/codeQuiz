// create a variable for id's from html
const title = document.getElementById("starTextTitle");

const text = document.getElementById("startText");

const time = document.getElementById("timer");

const startBtn = document.getElementById("startButton");

const mainPage = document.getElementById("mainPage");

// questions in an array
let questions = [
  // Question 1
  {
    question: "Commonly used data-type DO NOT include:",
    answers: {
      1: "Strings",
      2: "Booleans",
      3: "Alerts",
      4: "Numbers",
    },
    correctAnswer: "3",
  },
  //Question 2
  {
    question: "The Condition in an if/else statement is enclosed within _____.",
    answers: {
      1: "Quotes",
      2: "Curly Brackets",
      3: "Parenthesis",
      4: "Square Brackets",
    },
    correctAnswer: "3",
  },
  //Question 3
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: {
      1: "Numbers and Strings",
      2: "Other Arrays",
      3: "Booleans",
      4: "All Of The Above",
    },
    correctAnswer: "4",
  },
  //Question 4
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      1: "Commas",
      2: "Curly Brackets",
      3: "Quotes",
      4: "Parenthesis",
    },
    correctAnswer: "3",
  },
  //Question 5
  {
    question:
      "A very useful tool used for developing and debugging for printing content to the debugger is:",
    answers: {
      1: "Javascript",
      2: "Terminal/Bash",
      3: "For Loops",
      4: "Console.log",
    },
    correctAnswer: "4",
  },
]; //End of Questions Arr

//function to start the quiz
function startQuiz() {
  //hides mainpage after starting the quiz
  mainPage.style.display = "none";

  // timer creation
  let timeLeft = 75;

  let timerCountDown = setInterval(function () {
    timeLeft--;
    time.textContent = "Time Left: " + timeLeft;
  }, 1000);
}

startBtn.addEventListener("click", function () {
  startQuiz();
});
