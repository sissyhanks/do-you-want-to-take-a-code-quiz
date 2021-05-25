// script order
// 1) script.js > connected to index.html
// 2) timer.js > connected  to quiz.html
// 3) questions.js > connected  to quiz.html
// 4) form.js > connected  to quiz.html
// 5) storedScores.js > ? unused file, things stop working when it is deleted
// 6) score.js > connected to score.html

// creates list score & name sets will live 
var leaderBoard = document.querySelector("#list");
// gets all saved info (including current quiz's stats) from local memory 
var scoreBoarded = localStorage.getItem("scoreLog");
// turns stored info into logable info
var finalList = JSON.parse(scoreBoarded);

// button that takes user back to start screen 
var retake = document.querySelector("#retake");
retake.textContent = "Take it Again"
retake.addEventListener("click", function(){
    document.location.href = 'index.html';
});

function savedScores (){

    console.log(finalList);
   
// updates html of list so that info will show up as list items & be formatted as such 
    leaderBoard.innerHTML = "";
    // do the work that follows the number of time the final list is long
    for (var i = 0; i < finalList.length; i++) {
        // takes data returned turing each loop
        var recorded = finalList[i];
        // separates out score and name info + saves those as variables
        var recordedInitials = recorded.initialText;
        var recordedScore = recorded.scoreNumber;
        // and creates a list item with the score info as the text
        var li = document.createElement("li");
        li.textContent = recordedInitials + " - " + recordedScore;
        // that is added to the HTML of the list
        li.setAttribute();
        leaderBoard.appendChild(li);

        console.log(recordedInitials);
    }
}

savedScores();






