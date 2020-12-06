var words = ["JOY","ANGER","FEAR","EXCITMENT","SURPRISE","SADNESS","CONTEMPT","DISGUST"];
var nameWords = words[Math.floor(Math.random() * words.length)];
console.log(nameWords);

function createDashes() {
    for(var i=0; i < nameWords.length; i++)
    {
        var letter = document.createElement("div");
        letter.classList.add("box-letter");
        letter.id = "dashLetter";    
        box2.appendChild(letter);
        container.appendChild(box2);
    }
}

createDashes();


var matchLetter = new Set();
var wrongLetter = new Set();

var word = document.querySelectorAll("#dashLetter");

document.addEventListener("keypress", function(e) {    
    var letterGuess = e.key.toUpperCase();    
    
    if(Array.from(matchLetter).includes(letterGuess))
    {
          guessed.style.display = "block";
          guessedPara.innerHTML = "You have already entered " +  "'"  + letterGuess +  "'" + " Letter.";

    }
    else if(Array.from(wrongLetter).includes(letterGuess))
    {
        guessed.style.display = "block";
        guessedPara.innerHTML = "You have already entered " +  "'"  + letterGuess +  "'" + " Letter.";
    }

    else
    {
        guessed.style.display = "none";
        displayGuessRightWrong(letterGuess);
        
    }         
})


function displayGuessRightWrong(letter, val) {
    if(nameWords.includes(letter))
    {    
      for (var n = 0; n < nameWords.length; n++)
        {
            if(nameWords[n] === letter)
            {                
                word[n].innerText = letter;                   
                matchLetter.add(word[n].innerText);                               
            } 
            gameSuccess();           
        }  
                     
    } 
    else
    {        
       var wrongPara = document.getElementById("wrongPara");          
       wrongPara.innerText = Array.from(wrongLetter.add(letter));   
       wrong2.appendChild(wrongPara);          
       figures();  
       gameFail();
       
    }  
}

var displayFigures = document.getElementsByClassName("figure-part");
var n = 0;
function figures() {  
    displayFigures[n].style.visibility = "visible";
    n++;
}



function gameFail(){   
    if(Array.from(wrongLetter).length === displayFigures.length)
    {
            
       showGameFailDiv.style.display = "block"; 
           
    }
}

function myfunc() {
    window.location.reload();    
}


var givenWord = new Set(Array.from(nameWords));

function gameSuccess(){   
    if(Array.from(matchLetter).length === Array.from(givenWord).length)
    { 
       showGameSuccessDiv.style.display = "block";       
    }
}

function myfuncsuccess() {
    window.location.reload();    
}