var askQuestion = document.querySelector("#question");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");
var button = document.querySelector(".button");
var clock = document.querySelector("#timer");
var scoreCard = document.querySelector("#score");
var timeLeft;
var timeOff = 6;
var timeInterval;
var scoreNumber = 0;

// Timer that counts down from 5
function countdown() {
  timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      clock.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      clock.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      clock.textContent = "GAME OVER";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    //   gameOver();
    }
  }, 1000);
}

countdown();

class Questions {
    constructor(question, right, wrong1, wrong2, wrong3) {
        this.question = question;
        this.right = right;
        this.wrong1 = wrong1;
        this.wrong2 = wrong2;
        this.wrong3 = wrong3;
        this.choices = [];
        
        this.answerChoices = function(){
        this.choices.push(this.right, this.wrong1, this.wrong2, this.wrong3);
        this.choices.sort(() => Math.random() - 0.5);  
        };

        this.askQuestion = function(){
        askQuestion.textContent = this.question;
        buttonOne.textContent = this.choices[0];
        buttonTwo.textContent = this.choices[1];
        buttonThree.textContent = this.choices[2];
        buttonFour.textContent = this.choices[3];
        };
    }
}

scoreCard.textContent = scoreNumber;

let question1 = new Questions("Which of the following is not a javascript data type:", "function", "boolean", "number", "string");

let question2 = new Questions("what should this question be?", "this is my right answer", "this is not right", "this one is worse than right", "this one is wrong");

let question3 = new Questions("why?", "try bud dry", "why not", "why ask why", "not telling you");

let question4 = new Questions("can you even?", "i can't even", "i can odd", "can YOU even?", "no");

let question5 = new Questions("honestly?", "seriously", "lying", "honest to gog", "yep");

let question6 = new Questions("have you seen my shoes?", "they are nice", "noi", "have yo seen your shoes", "why can't you keep track of things");

let question7 = new Questions("come here often?", "i'm an aries", "where are we", "do we even exist", "no");

let question8 = new Questions("how will i know?", "when you dance ", "how will you no", "how will you not know", "i don't know");

let question9 = new Questions("what is my name?", "bernie", "billy", "bud", "buddy");

let question10 = new Questions("do you like cloth?", "i like cloth", "come", "on", "fhgwgods");

var choiceRun = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var activeChoice = choiceRun[0];

activeChoice.answerChoices();
activeChoice.askQuestion();

let i = 0;
function moveOn (){
    i++;
    if (i >= choiceRun.length){
        clearInterval(timeInterval);;
    } else{
        activeChoice = choiceRun[i];
        activeChoice.answerChoices();
        activeChoice.askQuestion();
    }
}

function grade(event) {
    var element = event.target;
    if (JSON.stringify(element.textContent) === JSON.stringify(activeChoice.right)){
        console.log("YES");
        scoreNumber++;
        console.log(scoreNumber);
        scoreCard.textContent = scoreNumber;
    }
    else {
        console.log("no");
        timeLeft = timeLeft - timeOff;
    }
    moveOn();
}

buttonOne.addEventListener('click', grade);
buttonTwo.addEventListener('click', grade);
buttonThree.addEventListener('click', grade);
buttonFour.addEventListener('click', grade);