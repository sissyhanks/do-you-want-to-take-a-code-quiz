// script order
// 1) script.js > connected to index.html
// 2) timer.js > connected  to quiz.html
// 3) questions.js > connected  to quiz.html
// 4) form.js > connected  to quiz.html
// 5) storedScores.js > ? unused file, things stop working when it is deleted
// 6) score.js > connected to score.html

// this is script.js > generates start screen elements + handles transformation and operation
// the start page presents a fake version of a quiz start page
// the used believes they are taking a personality quiz, but all elements change and they learn they are taking a horrifying JavaScript quiz
// element transformation is triggered by the mouse rolling over the body of the page & is time delayed

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

// fake start page content
headline.textContent = "Code Quiz";
description.textContent = "What does your most commonly generated JavaScript error say about you?";
errorPic1.setAttribute("src", "./assets/Images/fake1.png");
errorPic2.setAttribute("src", "./assets/Images/fake2.png");
errorPic3.setAttribute("src", "./assets/Images/fake3.png");
errorPic4.setAttribute("src", "./assets/Images/fake4.png");
acceptInvitation.textContent = "Find Out";


// mouse enter event triggers element transformation > stopListening function stops the listener even after one firing 

// i want the body of the web page to listen for cursor movement
let invitation = body;

// when the cursor moves over (mouseenter) the webpage (invitation) the stopListening function is fired
invitation.addEventListener("mouseenter", stopListening);


// slopListening function operation explained >>> notes also added at each point of operation within the function

// the stop listening function starts a two second timer
// after the time elapses all page elements are hidden, the background color changes and the content of all (still hidden) page elements are updated
// each element's change from hidden to visible is wrapped inside of a time and nested so that as one element becomes visible the timer to making the next element visible begins
// start button listener event is added at the same time it becomes visible (so the start button on the fake greeting screen is not live / won't take users to quiz body)
// once the web page hears the cursor rolling over it the listener event is removed

function stopListening () {

// the stop listening function starts a two second timer
      setTimeout(() => {

// after the time elapses all page elements are hidden, the background color changes and the content of all (still hidden) page elements are updated
body.setAttribute("style", "background-color:black;");
headline.replaceWith(headline); 
headline.textContent = "so you want to take a code quiz";
headline.setAttribute("style", "color:white; font-family:monospace; visibility:hidden;");
description.replaceWith(jugsaw);
pictureGridFakeout.replaceWith(description);
description.textContent = "take this code quiz";
description.setAttribute("style", "color:white; font-family:monospace; visibility:hidden;");
acceptInvitation.textContent = "Start";
acceptInvitation.setAttribute("style", "visibility:hidden;")

// each element's change from hidden to visible is wrapped inside of a time and nested so that as one element becomes visible the timer to making the next element visible begins
setTimeout(() => {
jugsaw.setAttribute("src", "./assets/Images/jugsaw.png")
setTimeout(() => {
headline.setAttribute("style", "visibility:visible;");
setTimeout(() => {
description.setAttribute("style", "visibility:visible;");
setTimeout(() => {
acceptInvitation.setAttribute("style", "visibility:visible;");
// start button listener event is added at the same time it becomes visible (so the start button on the fake greeting screen is not live / won't take users to quiz body)
acceptInvitation.addEventListener("click", function(){
    document.location.href = 'quiz.html';
});
}, 1000);
}, 1000);
}, 1000);
}, 1500);
}, 1500);

// once the web page hears the cursor rolling over it the listener event is removed
body.removeEventListener("mouseenter", stopListening);
        }
