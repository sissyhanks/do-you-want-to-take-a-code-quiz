// declaring variables related to timer
var clock = document.querySelector("#timer");
var timeLeft;
var timeOff = 4;
var timeInterval;

// timer operation
// starts at 60seconds
// takes one second off every second
// takes 4 seconds off for every wrong answer
// if clock reaches zero timer display is changed and page elements will change to display final score by running the scoreForm function
function countdown() {
  timeLeft = 75;
  clock.textContent = timeLeft;
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      clock.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      scoreForm();
      clock.textContent = "You are out of time."
    }
  }, 1000);
}

countdown();