// Variables //
var timer = 60;
var score = 0;
var questionCounter = 0;
var firstChoice, 
    secondChoice, 
    thirdChoice, 
    forthChoice;
var playerScores = [];
var playerInitals = [];
var lsPlayerScores = "";
var lsPlayerInitals = "";
var resultScore, resultInital;
var scoreSubmit, 
    nameSubmit, 
    hsList, 
    goBack, 
    clearScore, 
    list;


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
      question: "Which of the following are JavaScript Data Type?",
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
var quizEl = document.querySelector('.quiz');
var questionEl = document.querySelector('.questions');
var choicesEl = document.querySelector('.choices');
var answerEl = document.querySelector('.answers');
var startQuizBtn = document.querySelector('.start-quiz');


// Function //
function resetTimer() {
    timer = 60;
}

// Function to start the timer //
function startTimer() {
    var startTimer = setInterval(() => {
      if (timer > 0) {
        timerEl.textContent = "Time: " + timer;
        timer--;
      } else if (timer === 0) {
        clearInterval(startTimer);
        endQuiz();
      } else if (timer < 0) {
        clearInterval(startTimer);
        timer = 0;
        timerEl.textContent = "Time: " + timer;
        endQuiz();
      }
    }, 1600);
}

function home() {
    score = 0;
    questionEl.innerHTML = "<h1><center>Coding Pop Quiz</center></h1>";
    choicesEl.innerHTML =
      "<h2><center>Try to answer the following questions. You have 60 Seconds. Incorrect answers will deduct your score and time by 10.</center></h2>" +
      "<br><center><button class='start-quiz' type='button'>Start Quiz</button></center>";
    startQuizBtn = document.querySelector(".start-quiz");
    startQuizBtn.addEventListener("click", startQuiz);
    startQuizBtn.addEventListener("click", resetTimer);
}

// Function to Start Quiz //
function startQuiz() {
    startTimer();
    clearInterval(startTimer);
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
    questionEl.innerHTML = "<h1>Quiz Over!</h1>";
    choicesEl.innerHTML =
      "Your final score is " +
      score +
      "<div class='score'>Enter initials: <input type='text' id='initals'><button id='score-submit'>Submit</button></div>";
    scoreSubmit = document.querySelector("#score-submit");
    nameSubmit = document.querySelector("#initals");
    scoreSubmit.addEventListener("click", clickedScore);
}

  // Function to set name for score //
function clickedScore() {
    if (playerInitals.includes(nameSubmit.value)) {
      alert("That inital already exist");
    } else if (
      nameSubmit.value === "" ||
      nameSubmit.value === null ||
      nameSubmit.value === undefined
    ) {
      alert("Please enter valid initals");
    } else {
      playerInitals.push(nameSubmit.value);
      playerScores.push(score);
      setLS();
      matchHS();
      viewHS();
    }
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

// Function to view highscore //
function viewHS() {
    questionEl.innerHTML = "<h1>High Scores</h1>";
    choicesEl.innerHTML = "<ol id='hs-list'><ul>";
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

    // Function to clear the high score //
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

// Function to render the Question //
function renderQuestion(questionObj) {
    questionEl.innerHTML = questionObj.question;
}
  
// Function to render buttons / answers //
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

// Function to create eventListners for answer choices //
function createListeners() {
    firstChoice.addEventListener("click", clickedChoiceOne);
    secondChoice.addEventListener("click", clickedChoiceTwo);
    thirdChoice.addEventListener("click", clickedChoiceThree);
    forthChoice.addEventListener("click", clickedChoiceFour);
}

// Function when answer choice is clicked //
function clickedChoiceOne() {
    if ("a" === quizQuestions[questionCounter].correctAnswer) {
      answerEl.innerHTML = "Correct";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score += 10;
        startQuiz();
      }, 1000);
    } else {
      answerEl.innerHTML = "Incorrect: -10 Seconds";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score -= 10;
        timer -= 10;
        startQuiz();
      }, 1000);
    }
}

function clickedChoiceTwo() {
    if ("b" === quizQuestions[questionCounter].correctAnswer) {
      answerEl.innerHTML = "Correct";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score += 10;
        startQuiz();
      }, 1000);
    } else {
      answerEl.innerHTML = "Incorrect: -10 Seconds";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score -= 10;
        timer -= 10;
        startQuiz();
      }, 1000);
    }
}

function clickedChoiceThree() {
    if ("c" === quizQuestions[questionCounter].correctAnswer) {
      answerEl.innerHTML = "Correct";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score += 10;
        startQuiz();
      }, 1000);
    } else {
      answerEl.innerHTML = "Incorrect: -10 Seconds";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score -= 10;
        timer -= 10;
        startQuiz();
      }, 1000);
    }
}

function clickedChoiceFour() {
    if ("d" === quizQuestions[questionCounter].correctAnswer) {
      answerEl.innerHTML = "Correct";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score += 10;
        startQuiz();
      }, 1000);
    } else {
      answerEl.innerHTML = "Incorrect: -10 Seconds";
      setTimeout(() => {
        answerEl.innerHTML = "";
        questionCounter++;
        score -= 10;
        timer -= 10;
        startQuiz();
      }, 1000);
    }
}

home();
matchHS();


highscore = document.querySelector("#highscores");
highscore.addEventListener("click", viewHS);