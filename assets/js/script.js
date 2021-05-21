var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var acceptInvitation = document.querySelector("#start-button");
var picture = document.querySelector("#picture");

acceptInvitation.addEventListener("click", function(){
    document.location.href = 'quiz.html';
});

