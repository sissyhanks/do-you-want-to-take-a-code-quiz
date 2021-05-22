// declaring variables of the elements that will appear on screen after quiz ends
var recordScore = document.createElement("form");
var recordHowTo = document.createElement("p");
var addName = document.createElement("input");
var submit = document.createElement("button");

// changes the elements of quiz screen one second after quiz ends
// header remains, headline that normally displays question now displays score earned
// button one replaced with from to submit initials to record high score
// buttons 3-4 hidden
function scoreForm() {
  finalScore();
  setTimeout(() => {
    askQuestion.textContent = "You have earned a score of " + scoreTotal;
    console.log(timeLeft)
    quizBody.appendChild(buttonOne);
    buttonOne.replaceWith(recordScore);
    recordScore.appendChild(recordHowTo);
    recordScore.appendChild(addName);
    recordScore.appendChild(submit);
    recordHowTo.textContent = "Record your score, if you dare.";
    submit.textContent = "Submit";
    buttonTwo.setAttribute ("style", "visibility: hidden");
    buttonThree.setAttribute ("style", "visibility: hidden");
    buttonFour.setAttribute ("style", "visibility: hidden");
    button.setAttribute ("style", "visibility: hidden");
    comeCorrect.setAttribute ("style", "visibility: hidden");
  }, 1000);}

// moves to final HTML page
function scorePage() {
  document.location.href = 'score.html';
}

// locally store score
localStorage.setItem("playersScore", JSON.stringify(scoreTotal));

// listener event for button submitting high score
// records high score & initials 
// moves on to high score page
submit.addEventListener("click", function(event) {
  event.preventDefault();
  scorePage() 

  var currentScoreIn = {
    addName: addName.value.trim(),
    playerScore: scoreTotal,
  };

  localStorage.setItem("currentScoreIn", JSON.stringify(currentScoreIn));
});