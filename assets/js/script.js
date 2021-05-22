// Variables //
var timer = 90;
var score = 0;
var firstChoice, 
    secondChoice, 
    thirdChoice, 
    forthChoice;
var playerScores = [];
var playerInitals = [];
var lsPlayerScores = "";
var lsPlayerInitals = "";

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
    centerChoices();
    questionEl.innerHTML = "<h1><center>Coding Quiz Challenge</center></h1>";
    choicesEl.innerHTML =
      "<h2><center>Try to answer the following questions. You have 90 Seconds. Incorrect answers will deduct your score and time by 10.</center></h2>" +
      "<br><center><button class='start-quiz' type='button'>Start Quiz</button></center>";
    startQuizBtn = document.querySelector(".start-quiz");
    startQuizBtn.addEventListener("click", startQuiz);
    startQuizBtn.addEventListener("click", resetTimer);
}

console.log(home);

// Function when start quiz button is clicked //
function startQuiz() {
    alignChoices();
    startTimer();
    if (questionCounter === 0) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
    } else if (questionCounter === 1) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
    } else if (questionCounter === 2) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
    } else if (questionCounter === 3) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
    } else if (questionCounter === 4) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
    } else if (questionCounter === 5) {
      choicesEl.innerHTML = "";
      renderQuestion(quizQuestions[questionCounter]);
      createButton(quizQuestions[questionCounter]);
      createListeners();
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

function setLS() {
    lsPlayerScores = playerScores.toString();
    localStorage.setItem("playerScore", lsPlayerScores);
    lsPlayerInitals = playerInitals.toString();
    localStorage.setItem("playerInital", lsPlayerInitals);
}

function matchHS() {
    if (localStorage.getItem("playerScore") === null) {
      playerScores = [];
      playerInitals = [];
      lsPlayerScores = "";
      lsPlayerInitals = "";
    } else {
      lsPlayerInitals = localStorage.getItem("playerInital");
      lsPlayerScores = localStorage.getItem("playerScore");
      playerInitals = lsPlayerInitals.split(",");
      playerScores = lsPlayerScores.split(",");
    }
}

console.log(setLS);

// Function to view highscore //
function viewHS() {
    questionEl.innerHTML = "<h1>High Scores</h1>";
    choicesEl.innerHTML = "<ul id='hs-list'><ul>";
    hsList = document.querySelector("#hs-list");
  
    if (
      localStorage.getItem("playerInital", "") === "" ||
      playerScores === [] ||
      playerInitals === []
    ) {
      questionEl.innerHTML = "<h1>High Scores</h1>";
      choicesEl.innerHTML = "No High Scores";
    } else {
      
      for (var i = 0; i < playerScores.length; i++) {
        var list = document.createElement("li");
        list.setAttribute("id", "list");
        list.textContent = playerInitals[i] + " - " + playerScores[i];
        hsList.appendChild(list);
      }
    }

    
    var btnDiv = document.createElement("div");
    btnDiv.className = "endQuiz";
    choicesEl.appendChild(btnDiv);

    
    var goBackBtn = document.createElement("button");
    var clearScoreBtn = document.createElement("button");
    goBackBtn.setAttribute("id", "goBackBtn");
    clearScoreBtn.setAttribute("id", "clearScoreBtn");
    goBackBtn.innerHTML = "Go Back";
    clearScoreBtn.innerHTML = "Clear High Score";
    
    btnDiv.appendChild(goBackBtn);
    btnDiv.appendChild(clearScoreBtn);

    
    goBack = document.querySelector("#goBackBtn");
    clearScore = document.querySelector("#clearScoreBtn");
    goBackBtn.addEventListener("click", home);
    clearScore.addEventListener("click", clearHighScore);

    
    function clearHighScore() {
        playerScores = [];
        playerInitals = [];
        lsPlayerScores = "";
        lsPlayerInitals = "";
        localStorage.setItem("playerInital", "");
        localStorage.setItem("playerScore", "");
        viewHS();
    }
}

console.log(viewHS);


function renderQuestion(questionObj) {
    questionEl.innerHTML = questionObj.question;
}
  

function createButton(obj) {
    var answerOne = document.createElement("button");
    answerOne.textContent = "a) " + obj.answers["a"];
    answerOne.setAttribute("id", "a");
    choicesEl.appendChild(answerOne);
    firstChoice = choicesEl.querySelector("#a");
  
    var answerTwo = document.createElement("button");
    answerTwo.textContent = "b) " + obj.answers["b"];
    answerTwo.setAttribute("id", "b");
    choicesEl.appendChild(answerTwo);
    secondChoice = choicesEl.querySelector("#b");
  
    var answerThree = document.createElement("button");
    answerThree.textContent = "c) " + obj.answers["c"];
    answerThree.setAttribute("id", "c");
    choicesEl.appendChild(answerThree);
    thirdChoice = choicesEl.querySelector("#c");
  
    var answerFour = document.createElement("button");
    answerFour.textContent = "d) " + obj.answers["d"];
    answerFour.setAttribute("id", "d");
    choicesEl.appendChild(answerFour);
    forthChoice = choicesEl.querySelector("#d");
  
    createCheck = false;
}