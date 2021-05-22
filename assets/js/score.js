var leaderBoard = document.querySelector("#list");
var currentScoreIn = JSON.parse(localStorage.getItem(currentScoreIn));

console.log(currentScoreIn);



function highScoreBoard(){
  var currentScoreOut = JSON.parse(localStorage.getItem("currentScoreIn"));
  if (currentScoreOut !== null) {
      var somethingNew = [currentScoreOut.addName, currentScoreOut.playerScore];
   scoreList.push(somethingNew);

    console.log(scoreList);
  }
}
highScoreBoard();

function savedScores (){
   
    leaderBoard.innerHTML = "";
    for (var i = 0; i < scoreList.length; i++) {
        
        var recorded = scoreList;

        var li = document.createElement("li");
        li.textContent = recorded;
        li.setAttribute("data-index", i)

        leaderBoard.appendChild(li);

        console.log(recorded)
    }
}

savedScores();