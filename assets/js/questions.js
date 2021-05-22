// declaring variables that grab the HTML elements manipulated by JS
var quizBody = document.querySelector("#quiz-screen");
var askQuestion = document.querySelector("#question");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");
var button = document.querySelector(".button");
var comeCorrect = document.querySelector("#feedback");


// one function to disable all answer buttons
function buttonsOff (){
      buttonOne.disabled = true;
      buttonTwo.disabled = true;
      buttonThree.disabled = true;
      buttonFour.disabled = true;
}

// one function to enable all answer buttons
function buttonsOn (){
      buttonOne.disabled = false;
      buttonTwo.disabled = false;
      buttonThree.disabled = false;
      buttonFour.disabled = false;
}

// declaring variables related to score
var scoreNumber = 0;
var scoreTotal = 0;

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

// final score is the number of questions answered correctly plus the amount to seconds on timer
function finalScore (){
    scoreTotal = scoreNumber + timeLeft;
}

// function to run when questions are answered correctly
// when a correct answer is given buttons are disabled and the feedback 'correct' is displayed for 3/4 of a second before next question is called
comeCorrect.textContent = "Correct";
comeCorrect.setAttribute ("style", "visibility: hidden")
function peepCorrect (){{
  buttonsOff ();
  comeCorrect.setAttribute ("style", "visibility: visible");
  setTimeout(() => {
    moveOn();
    comeCorrect.setAttribute ("style", "visibility: hidden");
  }, 0750);}
}

// object constructor 
// takes in question wording and answer options
// randomizes order of answer options
//  writes question to heading element and answer options to buttons
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

// questions and answer options (correct answer is always first option)
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

// array of declared questions
var choiceRun = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

// declares the variable for the actively displayed question 
var activeChoice = choiceRun[0];

activeChoice.answerChoices();
activeChoice.askQuestion();

// function evaluates the number of the question being asked 
// fires when an answer button is clicked
// if there are more questions in the que (if i < choiceRun.length)
// then the next answer will be presented and buttons will be turned on
//  if not program will move on and display player's score & ask if they want to record it
let i = 0;
function moveOn (){
    i++;
    if (i >= choiceRun.length){
      scoreForm();
      clearInterval(timeInterval);
    } else{
      activeChoice = choiceRun[i];
      activeChoice.answerChoices();
      activeChoice.askQuestion();
      buttonsOn();
    }
  }

// evaluates answers when an answer button is clicked
// TODO display WRONG if answer incorrectly
// increases score and displays correct if answer is right
// decreases time on clock if answer is wrong
function grade(event) {
    var element = event.target;
    if (JSON.stringify(element.textContent) === JSON.stringify(activeChoice.right)){
        console.log("YES");
        scoreNumber++;
        peepCorrect ();
        console.log(scoreNumber)
    }
    else {
        console.log("no");
        timeLeft = timeLeft - timeOff;
        moveOn();
    }
    if (i >= choiceRun.length){
      buttonsOff();
    }
}

// answer button event listeners to run grade function
buttonOne.addEventListener('click', grade);
buttonTwo.addEventListener('click', grade);
buttonThree.addEventListener('click', grade);
buttonFour.addEventListener('click', grade);

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

// listener event for button submitting high score
// records high score & initials 
// moves on to high score page
submit.addEventListener("click", function(event) {
  event.preventDefault();
  scorePage() });


