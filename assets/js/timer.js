// script order
// 1) script.js > connected to index.html
// 2) timer.js > connected  to quiz.html
// 3) questions.js > connected  to quiz.html
// 4) form.js > connected  to quiz.html
// 5) storedScores.js > ? unused file, things stop working when it is deleted
// 6) score.js > connected to score.html

// declaring variables related to timer
var clock = document.querySelector("#timer");
var timeLeft;
var timeOff = 4;
var timeInterval;

// timer operation
// starts at 75seconds
// takes one second off every second
// takes 4 seconds off for every wrong answer
// if clock reaches zero timer display is changed and page elements will change to display final score by running the scoreForm function
function countdown() {
// starts at 75seconds & countdown element displays current countdown number
  timeLeft = 75;
  clock.textContent = timeLeft;
// function reads time left value once every 1000 milliseconds
  timeInterval = setInterval(function () {

// if the number of time left is greater than one, one will be subtracted from time left and time left value will be updated
    if (timeLeft > 1) {
      clock.textContent = timeLeft;
      timeLeft--;
    } else {

// tells function there are no more time intervals to run through
// triggers scoreForm function 
// updates countdown display to with out of time message
      clearInterval(timeInterval);
      scoreForm();
      clock.textContent = "You are out of time.";
    }
  }, 1000);
}

// calls function >> starts timer
countdown();