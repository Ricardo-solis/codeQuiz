// create a variable for id's from html
const title = document.getElementById("starTextTitle");

const text = document.getElementById("startText");

const time = document.getElementById("timer");

const startBtn = document.getElementById("startButton");

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
]; //End of Questions Array

var timer = {
  time: 30,

  resetTime: function () {
    timer.time = 30;
    timer.updateDisplay();
    clearInterval(intervalId);
  },

  start: function () {
    timer.updateDisplay();
    intervalId = setInterval(timer.count, 1000);
  },

  count: function () {
    timer.time--;
    var newTime = timer.convert(timer.time);

    timer.updateDisplay();

    if (timer.time === 0) {
      timeUp();
    }
  },

  updateDisplay: function () {
    $("#time-display").html(timer.convert(timer.time));
  },

  convert: function (t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },
};
