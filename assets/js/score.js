var leaderBoard = document.querySelector("#list");
var scoreBoarded = localStorage.getItem("scoreLog");
var finalList = JSON.parse(scoreBoarded);

var retake = document.querySelector("#retake");
retake.textContent = "Take it Again"
retake.addEventListener("click", function(){
    document.location.href = 'index.html';
});

function savedScores (){

    console.log(finalList);
   
    leaderBoard.innerHTML = "";
    for (var i = 0; i < finalList.length; i++) {
        
        var recorded = finalList[i];
        
        var recordedInitials = recorded.initialText;
        var recordedScore = recorded.scoreNumber;

        var li = document.createElement("li");
        li.textContent = recordedInitials + " - " + recordedScore;
        li.setAttribute();

        leaderBoard.appendChild(li);

        console.log(recordedInitials);
    }
}

savedScores();






