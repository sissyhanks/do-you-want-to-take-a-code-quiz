// script order
// 1) script.js > connected to index.html
// 2) timer.js > connected  to quiz.html
// 3) questions.js > connected  to quiz.html
// 4) form.js > connected  to quiz.html
// 5) storedScores.js > ? unused file, things stop working when it is deleted
// 6) score.js > connected to score.html

// declaring variables of the elements that will appear on screen after quiz ends

var formScreen = document.querySelector("#form-screen");
var recordScore = document.createElement("form");
var recordHowTo = document.createElement("p");
var addName = document.createElement("input");
var submit = document.createElement("button");

// changes the elements of quiz screen one second after quiz ends
// header remains, headline that normally displays question now displays score earned
// button one replaced with from to submit initials to record high score
// buttons 3-4 hidden
function scoreForm() {
  // final score function called from questions.js script, total correct answers + timeLeft as calculated in countdown function on timer.js script
  finalScore();
  // element transformation is wrapped in a 1 second delay
  setTimeout(() => {
    askQuestion.textContent = "You have earned a score of " + scoreTotal;
    console.log(timeLeft);
    formScreen.appendChild(recordScore);
    recordScore.appendChild(recordHowTo);
    recordScore.appendChild(addName);
    recordScore.appendChild(submit);
    recordHowTo.textContent = "Record your score, if you dare.";
    submit.textContent = "Submit";
    buttonOne.setAttribute ("style", "visibility: hidden");
    buttonTwo.setAttribute ("style", "visibility: hidden");
    buttonThree.setAttribute ("style", "visibility: hidden");
    buttonFour.setAttribute ("style", "visibility: hidden");
    // button.setAttribute ("style", "visibility: hidden");
    comeCorrect.setAttribute ("style", "visibility: hidden");
  }, 1000);}

// moves to final HTML page
function scorePage() {
  document.location.href = 'score.html';
}

// listener event for button submitting high score
// records high score & initials 
// moves on to high score page
submit.addEventListener("click", function(event) {
  event.preventDefault();
  scorePage();
  
// object containing calculated score and info entered by user
  thisScore = {
    scoreNumber: scoreTotal,
    initialText: addName.value
  }

  console.log(thisScore);


  var scoreLog = localStorage.getItem("scoreLog");

  // says that each set of name&scores will live in an object and or opens the object of previous score sets from local memory
  if (scoreLog === null) {
    scoreLog = {};
  } else {
    scoreLog = JSON.parse(scoreLog);
  }

  console.log(scoreLog);

  // pushes the current score/name set to an Array, makes a string version of the array of objects & stores the updated version, which becomes the variable that goes into the object that new names&scores are added to above
  //  *** this is the push that won't happen & where the script is stopped being read
  scoreLog.push(thisScore);
  var scoreList = JSON.stringify(scoreLog);
  localStorage.setItem("scoreLog", scoreList);

});