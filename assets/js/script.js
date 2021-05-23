// start screen body elements
var body = document.body;
var startCard = document.createElement("div");
var headline = document.createElement("h1");
var jugsawFakeout = document.createElement("div");
var pictureGridFakeout = document.createElement("div");
var acceptInvitation = document.createElement("button");
var description = document.createElement("p");

// fake page elements
var errorCard = document.createElement("div");
var errorPic1 = document.createElement("img");
var errorPic2 = document.createElement("img");
var errorPic3 = document.createElement("img");
var errorPic4 = document.createElement("img");

// start screen transformation element
var jugsaw = document.createElement("img");

// create page structure 
body.appendChild(startCard);
startCard.appendChild(headline);
startCard.appendChild(jugsawFakeout);
jugsawFakeout.appendChild(description);
startCard.appendChild(pictureGridFakeout);
pictureGridFakeout.appendChild(errorPic1);
pictureGridFakeout.appendChild(errorPic2);
pictureGridFakeout.appendChild(errorPic3);
pictureGridFakeout.appendChild(errorPic4);
startCard.appendChild(acceptInvitation);

// style fake start page
body.setAttribute("style", "background:white; color:black;");
startCard.setAttribute("style", "display:flex; flex-direction:column; align-items:center");
headline.setAttribute("style", "font-family:helvetica,sans-serif; font-size:8em; margin:.1em 0 .1em 0;");
jugsawFakeout.setAttribute("style", "width:75%; display:flex; justify-content:center;");
description.setAttribute("style", "font-family:garamond,serif; font-size:1.75em; margin:.2em 0 .5em 0;");
pictureGridFakeout.setAttribute("style", "width:75%; display:flex; flex-wrap:wrap; justify-content:space-around; align-content:space-around;");
acceptInvitation.setAttribute("style", "font-family:helvetica, sans-serif; font-size:1.25em; width:auto;");
errorPic1.setAttribute("style", "margin-bottom:1em;");
errorPic2.setAttribute("style", "margin-bottom:1em;");
errorPic3.setAttribute("style", "margin-bottom:1em;");
errorPic4.setAttribute("style", "margin-bottom:1em;");

headline.textContent = "Code Quiz";
description.textContent = "What does your most commonly generated JavaScript error say about you?";
errorPic1.setAttribute("src", "./assets/Images/fake1.png");
errorPic2.setAttribute("src", "./assets/Images/fake2.png");
errorPic3.setAttribute("src", "./assets/Images/fake3.png");
errorPic4.setAttribute("src", "./assets/Images/fake4.png");
acceptInvitation.textContent = "Find Out";







acceptInvitation.addEventListener("click", function(){
    document.location.href = 'quiz.html';
});

let invitation = body;

invitation.addEventListener("mouseenter", stopListening)

function stopListening () {
      setTimeout(() => {
body.setAttribute ("style", "background-color:black;");
headline.replaceWith(headline); 
headline.textContent = "so you want to take a code quiz";
headline.setAttribute ("style", "color:white; font-family: monospace;");
// description.setAttribute ("style", "visibility, hide;");
// jugsawFakeout.setAttribute ("style", "visibility, hide;");
description.replaceWith(jugsaw);

jugsaw.setAttribute("src", "./assets/Images/jugsaw.png");
// jugsaw.setAttribute ("style", "visibility, hide;");
pictureGridFakeout.replaceWith(description);
description.textContent = "take this code quiz";
description.setAttribute ("style", "color:white; font-family: monospace;");
acceptInvitation.textContent = "Start";


// pictureGridFakeout.setAttribute ();
// pictureGridFakeout.setAttribute ();
// pictureGridFakeout.setAttribute ();
// pictureGridFakeout.setAttribute ();
// setTimeout(() => {
// body.appendChild(startCard);
// startCard.appendChild(headline);
// startCard.appendChild(jugsawFakeout);
// jugsawFakeout.appendChild(jugsaw);
// startCard.appendChild(pictureGridFakeout);
// pictureGridFakeout.appendChild(description);
// startCard.appendChild(acceptInvitation);
// jugsawFakeout.appendChild(jugsaw);
// jugsaw.setAttribute("src", "./assets/Images/fake4.png");
// setTimeout(() => {
// headline.textContent = "so you want to take a code quiz";
// headline.setAttribute ("style", "color: white")
// }, 1000);
// }, 1000);
  }, 2000);
body.removeEventListener("mouseenter", stopListening);
        }
