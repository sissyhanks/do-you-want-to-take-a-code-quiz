

var askQuestion = document.querySelector("#question");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");
var button = document.querySelector(".button")

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

        this.answerChoices();
        this.askQuestion();
    }
}





let question1 = new Questions("Which of the following is not a javascript data type:", "function", "boolean", "number", "string");

let question2 = new Questions("what should this question be?", "this is my right answer", "this is not right", "this one is worse than right", "this one is wrong");

// var contentRun = [question1, question2]

// const isEqual = ()

console.log(JSON.stringify(buttonOne.textContent));
console.log(JSON.stringify(question1.right));

console.log(buttonOne.textContent);
console.log(question1.right);

// var student = JSON.stringify(buttonOne.textContent);
// var teacher = JSON.stringify(question2.right)

        function gradeOne(){
            if (JSON.stringify(buttonOne.textContent) === JSON.stringify(question2.right)){
                console.log("YES");
            }
            else {
                console.log("no");
            }
        };

        buttonOne.addEventListener('click', gradeOne);
        // buttonTwo.addEventListener('click');
        // buttonThree.addEventListener('click');
        // buttonFour.addEventListener('click');









