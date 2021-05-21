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



// Function //
function resetTimer() {
    timer = 90;
}

// function home() {
    questionEl.textContent = "Coding Quiz Challenge";
    choicesEl.textContent = "Try to answer the following questions. You have 90 Seconds. Incorrect answers will deduct your score and time by 10.";
//   }