// TODO add event listener to start button that changes styling on hover and on click and advances to runQuiz() on click
// TODO make quizItem buttons list items
// TODO set even listeners on quizItem buttons & change styling on hover and on click and advance to next question on click
// TODO set up a way to feed in object item values


// var startPage
// creates h1 element and writes quiz headline to it
// creates p element and writes quiz directions to it
// creates start button and writes "start" to it
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var acceptInvitation = document.querySelector("#start-button");



// function takeTheQuiz () {
//     startScreen.setAttribute("style", "visibility:hidden");
//     quizScreen.setAttribute("style", "visibility:visible");
//     quizItem.runQuiz()
// }

acceptInvitation.addEventListener("click", onclick="href='/quiz.html'");



var askQuestion = document.querySelector("#question");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");




// var quizItem script:
// creates h1 element and writes quiz question to it
// creates 4 button elements
// randomly assigns answer selection to each button
// changes display style of button displaying correct answer 
var quizItem = {
question: 
choices: [],


}

function runQuiz(){
    askQuestion.textContent = quizItem.question;
    document.body.appendChild(askQuestion);
    quizItem.choices.push(quizItem.right, quizItem.wrong1, quizItem.wrong2, quizItem.wrong3);
    quizItem.choices.sort(() => Math.random() - 0.5);  
    buttonOne.textContent = quizItem.choices[0]; 
    document.body.appendChild(buttonOne);
    buttonTwo.textContent = quizItem.choices[1];
    document.body.appendChild(buttonTwo);
    buttonThree.textContent = quizItem.choices[2];  
    document.body.appendChild(buttonThree);
    buttonFour.textContent = quizItem.choices[3];
    document.body.appendChild(buttonFour);
    if (buttonOne.textContent === quizItem.right) {
        buttonOne.setAttribute("style", "color:white; background:black;");
    } else if (buttonTwo.textContent === quizItem.right) {
        buttonTwo.setAttribute("style", "color:white; background:black;");
    } else if (buttonThree.textContent === quizItem.right) {
        buttonThree.setAttribute("style", "color:white; background:black;");
    } else if (buttonFour.textContent === quizItem.right) {
        buttonFour.setAttribute("style", "color:white; background:black;");
    }
}

console.log(buttonOne.textContent);
console.log(quizItem.right);





// function halt (event){
//     event.preventDefault();
//     function test (x){
//     if {
//         console.log("hi");
//     } else {
//         console.log("bye");
//     }
// }
// }

// function (x) {
//     if (x === quizItem.right){
//         console.log("right");
//     } else {
//         console.log("wrong");
//     }
// }

// function stop (event) {

//     //  console.log("hi");
// }

// function listen () {
//     stop;
//     grade;
// }

buttonOne.addEventListener("click", function (event){
    event.preventDefault();
});
buttonOne.addEventListener("click", function (buttonOne) {
    if (buttonOne.textContent === quizItem.right){
        console.log("right");
    } else {
        console.log("wrong");
    }
})

buttonTwo.addEventListener("click", function (event){
    event.preventDefault();
});
buttonTwo.addEventListener("click", function (buttonTwo) {
    if (buttonTwo.textContent === quizItem.right){
        console.log("right");
    } else {
        console.log("wrong");
    }
})

buttonThree.addEventListener("click", function (event){
    event.preventDefault();
});
buttonThree.addEventListener("click", function (buttonThree) {
    if (buttonThree.textContent === quizItem.right){
        console.log("right");
    } else {
        console.log("wrong");
    }
})

buttonFour.addEventListener("click", function (event){
    event.preventDefault();
});
buttonFour.addEventListener("click", function (buttonFour) {
    if (buttonFour.textContent === quizItem.right){
        console.log("right");
    } else {
        console.log("wrong");
    }
})



