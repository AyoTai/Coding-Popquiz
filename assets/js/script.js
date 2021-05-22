// Variables //
var timer = 90;
var score = 0;
var firstChoice, 
    secondChoice, 
    thirdChoice, 
    forthChoice;

var quizQuestions = [
    {
      question: "What does HTML stand for?",
      answers: {
        a: "Hyper Tech Marking Web",
        b: "Hyper Text Marking Length",
        c: "Hyper Text Markup Language",
        d: "Hoop Texas Michigan Langostino",
      },
      correctAnswer: "c",
    },
    {
      question: "What does the .pop() method do?",
      answers: {
        a: "add to the array",
        b: "take out the last array",
        c: "take out first array",
        d: "replaces first array",
      },
      correctAnswer: "b",
    },
    {
      question: "Which of the following are JavaScript Date Type?",
      answers: {
        a: "undefined",
        b: "jQuery",
        c: "Bootstrap",
        d: "Python",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the === operator?",
      answers: {
        a: "assignment",
        b: "multiplication",
        c: "strict equality",
        d: "concatonate",
      },
      correctAnswer: "c",
    },
    {
      question:
        "How to create an unordered list (a list with the list items in bullets) in HTML?",
      answers: {
        a: "<ol>",
        b: "<ul>",
        c: "<li>",
        d: "<img>",
      },
      correctAnswer: "b",
    },
    {
      question: "Which character is used to represent the closing of a tag in HTML?",
      answers: {
        a: "/",
        b: "!",
        c: "|",
        d: ".",
      },
      correctAnswer: "a",
    },
  ];
  
// Selectors //
var timerEl = document.querySelector('.timer');
var quizEl = document.querySelector('quiz');
var questionEl = document.querySelector('.question');
var choicesEl = document.querySelector('.choices');
var answerEl = document.querySelector('.answers');



// Functions //
function resetTimer() {
    timer = 90;
}

function startTimer() {
    var startTimer = setInterval(() => {
        if(timer > 0) {
            timerEl.textContent = "Time: " + timer;
            timer--;
            
        } 
    }, 1000);
}

startTimer();

function home() {
    score = 0;
    questionEl.innerHTML = "<h1><center>Coding Quiz Challenge</center></h1>";
    choicesEl.innerHTML =
      "<h2><center>Try to answer the following questions. You have 90 Seconds. Incorrect answers will deduct your score and time by 10.</center></h2>" +
      "<br><center><button class='start-quiz' type='button'>Start Quiz</button></center>";
}

console.log(home);

// Function when start quiz button is clicked //
function startQuiz() {
    startTimer();
    if (questionCounter === 0) {
      choicesEl.innerHTML = "";
    } else if (questionCounter === 1) {
      choicesEl.innerHTML = "";
    } else if (questionCounter === 2) {
      choicesEl.innerHTML = "";
    } else if (questionCounter === 3) {
      choicesEl.innerHTML = "";
    } else if (questionCounter === 4) {
      choicesEl.innerHTML = "";
    } else if (questionCounter === 5) {
      choicesEl.innerHTML = "";
    } else {
      endQuiz();
    }
}

function endQuiz() {
    questionCounter = 0;
    timer = 0;
    if (score < 0) {
      score = 0;
    }
    scoreSubmit.addEventListener("click", clickedScore);
}

// Function when the submit high score button is clicked //
function clickedScore() {
    
}