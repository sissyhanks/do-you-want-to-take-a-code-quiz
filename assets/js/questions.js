// script order
// 1) script.js > connected to index.html
// 2) timer.js > connected  to quiz.html
// 3) questions.js > connected  to quiz.html
// 4) form.js > connected  to quiz.html
// 5) storedScores.js > ? unused file, things stop working when it is deleted
// 6) score.js > connected to score.html

// declaring variables that grab the HTML elements manipulated by JS
var quizBody = document.querySelector("#quiz-screen");
var askQuestion = document.querySelector("#question");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");
var button = document.querySelector(".button");
var comeCorrect = document.querySelector("#feedback");
var comeWrong = document.querySelector("#feedfront");

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

// final score is the number of questions answered correctly plus the amount to seconds on timer
function finalScore (){
    scoreTotal = scoreNumber + timeLeft;
}

// function to run when questions are answered correctly
// when a correct answer is given buttons are disabled and function calling the feedback 'correct' is displayed for 3/4 of a second before next question is called
comeCorrect.textContent = "Correct";
comeCorrect.setAttribute ("style", "visibility: hidden");
function peepCorrect (){{
  buttonsOff ();
  comeCorrect.setAttribute ("style", "visibility: visible");
  setTimeout(() => {
    moveOn();
    comeCorrect.setAttribute ("style", "visibility: hidden");
  }, 0750);}
}

// function to run when questions are answered incorrectly
// when an incorrect answer is given buttons are disabled and function calling jugsaw to flash on screen or 3/4 of a second before next question is called
comeWrong.setAttribute ("style", "visibility: hidden");
function peepWrong (){{
  buttonsOff ();
  comeWrong.setAttribute ("style", "visibility: visible");
  setTimeout(() => {
    moveOn();
    comeWrong.setAttribute ("style", "visibility: hidden");
  }, 0750);}
}

// object constructor 
// takes in question wording and answer options
// randomizes order of answer options
//  compiles information to be written to corresponding elements when question is called

// object constructor
class Questions {
  // takes in question wording and answer options
    constructor(question, right, wrong1, wrong2, wrong3) {
        this.question = question;
        this.right = right;
        this.wrong1 = wrong1;
        this.wrong2 = wrong2;
        this.wrong3 = wrong3;
        this.choices = [];
        
        // randomizes order of answer options
        this.answerChoices = function(){
        this.choices.push(this.right, this.wrong1, this.wrong2, this.wrong3);
        this.choices.sort(() => Math.random() - 0.5);  
        };

        //  compiles information to be written to corresponding elements when question is called
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

let question2 = new Questions("What does DOM stand for?", "Document Object Model", "Do Onto Mothers", "Don't Over think Mainframe", "Diapers On Monkeys ");

let question3 = new Questions("What is the name of something that evaluates into a single value?", "Expression", "Object", "String", "Window");

let question4 = new Questions("What symbol is used for concatenation?", "+", "#", "&", "*");

let question5 = new Questions("What index number is the third item in an array?", "2", "3", "0", "6");

let question6 = new Questions("What operator is used to test and see if two conditions are logical?", "&&", "||", "!!", "🖖🖖");

let question7 = new Questions("Which of the following is not a mouse event?", "submit", "dblclick", "click", "mouseout");

let question8 = new Questions("What is an array?", "An Object", "A Keyword", "An Operator", "An Event Listener");

let question9 = new Questions("What type of statement must precede an else statement?", "An if Statement", "A Why Statement", "A Bank Statement", "An Unspoken Statement");

let question10 = new Questions("What do you call JavaScript when it is not behaving?", "European Computer Manufacturers Association Script", "Late for Dinner", "A Cab", "fhqwhgads");

// array of declared questions
var choiceRun = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

// declares the variable for the actively displayed question 
var activeChoice = choiceRun[0];

// calls the answer choice function (from the Questions object constructor) which generates a random array of possible answers from the options in the activeChoice
activeChoice.answerChoices();

// calls the ask question function (from the Questions object constructor) which writes headline and questions options to corresponding elements
activeChoice.askQuestion();

// function evaluates the number of the question being asked 
// it is fired within the peep wrong & peep correct functions above>> when an answer button is clicked
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

// evaluates answers when an answer button is clicked by stringifing both the text content of the button that was clicked and the value of the 'right' variable for the question being evaluated
// if the values are the same data type (which, duh! we turned them both into strings) and the same in content then the answer is correct & peep correct function above fires
// if not then the answer is incorrect and the peep wrong function from above is fired
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
        peepWrong ();
    }
    if (i >= choiceRun.length){
      buttonsOff();
    }

}

// answer button event listeners to run grade function when a button is clicked
buttonOne.addEventListener('click', grade);
buttonTwo.addEventListener('click', grade);
buttonThree.addEventListener('click', grade);
buttonFour.addEventListener('click', grade);