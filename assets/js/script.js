// TODO add event listener to start button that changes styling on hover and on click and advances to runQuiz() on click
// TODO make quizItem buttons list items
// TODO set even listeners on quizItem buttons & change styling on hover and on click and advance to next question on click
// TODO set up a way to feed in object item values


// var startPage
// creates h1 element and writes quiz headline to it
// creates p element and writes quiz directions to it
// creates start button and writes "start" to it

var startPage = {
body: document.body,
h1Headline: document.createElement("h1"),
directions: document.createElement("p"),
button: document.createElement("button"),

question: "Do you want to take a quiz?",
instructions: "How to take the quiz.",
startButton: "start",

moveOn: function (){
    delete startPage;
    quizItem.runQuiz();
},

// startButton.addEventListener("click", this.moveOn),


startQuiz: function (){
    this.h1Headline.textContent = this.question;
    document.body.appendChild(this.h1Headline);
    this.directions.textContent = this.instructions;
    document.body.appendChild(this.directions);
    this.button.textContent = this.startButton;
    document.body.appendChild(this.button);
    this.startButton.addEventListener("click", this.moveOn());
},




//   var elem = document.getElementById("myDiv");
//   elem.remove();


}

// var quizItem script:
// creates h1 element and writes quiz question to it
// creates 4 button elements
// randomly assigns answer selection to each button
// changes display style of button displaying correct answer 
var quizItem = {
body: document.body,
h1Headline: document.createElement("h1"),
buttonOne: document.createElement("button"),
buttonTwo: document.createElement("button"),
buttonThree: document.createElement("button"),
buttonFour: document.createElement("button"),

question: "Which of the following is not a javascript data type:",
right: "function",
wrong1: "boolean", 
wrong2: "number", 
wrong3: "string",
choices: [],

runQuiz: function (){
    this.h1Headline.textContent = this.question;
    document.body.appendChild(this.h1Headline);
    this.choices.push(this.right, this.wrong1, this.wrong2, this.wrong3);
    this.choices.sort(() => Math.random() - 0.5);  
    this.buttonOne.textContent = this.choices[0];
    document.body.appendChild(this.buttonOne);  
    this.buttonTwo.textContent = this.choices[1];
    document.body.appendChild(this.buttonTwo);  
    this.buttonThree.textContent = this.choices[2];
    document.body.appendChild(this.buttonThree);  
    this.buttonFour.textContent = this.choices[3];
    document.body.appendChild(this.buttonFour); 
    if (this.buttonOne.textContent === this.right) {
        this.buttonOne.setAttribute("style", "color:white; background:black;");
    } else if (this.buttonTwo.textContent === this.right) {
        this.buttonTwo.setAttribute("style", "color:white; background:black;");
    } else if (this.buttonThree.textContent === this.right) {
        this.buttonThree.setAttribute("style", "color:white; background:black;");
    } else if (this.buttonFour.textContent === this.right) {
        this.buttonFour.setAttribute("style", "color:white; background:black;");
    }
}
}


startPage.startQuiz();
// quizItem.runQuiz();







