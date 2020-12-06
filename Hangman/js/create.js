
var box1 = document.getElementById("box1");
box1.style.margin = "10px 0 0 0";

var title = document.createElement("h1");
title.id = "title";
title.style.textAlign = "center";
var titleName = document.createTextNode("HANGMAN"); 
title.appendChild(titleName);
box1.appendChild(title);

var info = document.createElement("p");
info.id = "msg";
var infoMsg = document.createTextNode("Find the hidden word for basic emotions- Enter a letter"); 
info.classList.add("info");
info.appendChild(infoMsg);
box1.appendChild(info);


// Show the dashed line............
var container = document.getElementById("box3");
var box2 = document.getElementById("box2");


// Show the wrong words
var wrong1 = document.getElementById("box4");
var wrong2 = document.createElement("span");
var wrong3 = document.createTextNode("Wrong");
wrong2.appendChild(wrong3);
wrong1.appendChild(wrong2);


// Show the guessed word (that can be wrong and right letters)
var guessed = document.getElementById("box5");
guessed.classList.add("guessed-div");
var guessedPara = document.createElement("p");
guessedPara.classList.add("guessed-para");
guessed.appendChild(guessedPara);
  

// Show Game Fail Message
var showGameFailDiv = document.getElementById("box6");
showGameFailDiv.classList.add("show-game-fail");
var showMsgFail = document.getElementById("game-fail");
showMsgFail.innerHTML = "Unfortunately You Lost Game";
showMsgFail.classList.add("game-fail-msg");
showGameFailDiv.appendChild(showMsgFail);
document.body.appendChild(showGameFailDiv);


// Show Game Success Message
var showGameSuccessDiv = document.getElementById("box7");
showGameSuccessDiv.classList.add("show-game-success");
var showMsgSuccess = document.getElementById("game-success");
showMsgSuccess.innerHTML = "Congratulations! You Won Game";
showMsgSuccess.classList.add("game-success-msg");
showGameSuccessDiv.appendChild(showMsgSuccess);
document.body.appendChild(showGameSuccessDiv);

