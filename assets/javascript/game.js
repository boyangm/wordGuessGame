 window.onload=function(){
const movieTitles = [
    "star wars",
    "rush hour",
    "princess bride",
    "office space",
    "purple rain",
    "usual suspects",
    "top gun"
    
];
let chosenWord=[];
let lettersGuessed= []; 
let attempts = 10;
let LetterCount = 0;
let newGame = true;

const guessArea= document.querySelector("#guessArea");
const guessText = document.querySelector("#guessText");
const attemptsText= document.querySelector('#attempts');
const screen= document.querySelector('.screen');
const sideA= document.querySelector('.side-a');
const sideB= document.querySelector('.side-b');
let i; 
let blank =[];
function initialize(){
lettersGuessed=[];
guessText.textContent= "Letters you have guessed: " + lettersGuessed.join(' ');
attempts=10;
attemptsText.textContent= "number of guesses left: " +attempts;
}

function newWord () {
    i = Math.floor(Math.random()* movieTitles.length);
    chosenWord= movieTitles[i].split("");
    console.log(chosenWord);
    blank= [];
    LetterCount= movieTitles[i].length - 1;
    console.log(LetterCount);
    for ( let j = 0; j < movieTitles[i].length ; j++){
        blank.push("-");
        guessArea.textContent= blank.join(" ");
        ;
    }
}


newWord();


screen.addEventListener('click', function (){
    sideA.style.transform='rotateY(-180deg)';
    sideB.style.transform='rotateY(0deg)';
    sideB.style.opacity= 1;


});
document.onkeyup = function(event){
    if (attempts > 0){
        var r = event.key;
        attemptsText.textContent= "number of guesses left: " +attempts;
        if ((r >= "a") && (r <= "z")){
            lettersGuessed.push(r);
            guessText.textContent= "Letters you have guessed: " + lettersGuessed.join(' ');
            // guessText.textContent= "";
            // console.log(lettersGuessed);
        }
        if((movieTitles[i].indexOf(r) > -1)&&(LetterCount > 0)){
            console.log('lc:' +LetterCount);
            for (let pos = 0 ; pos < movieTitles[i].length; pos++){
                if (r ===chosenWord[pos]){
                LetterCount--;
                blank[pos]= r;
                // guessArea.textContent= "";
                console.log (blank);
                guessArea.textContent= blank.join(" ");
                }
            }

        } else{
            attempts--;
        }

    } else {
        alert('you are out of tries');
        newGame=confirm('want to play again?');
        if(newGame){
            initialize();
           newWord();
        };
        
    }
    if(LetterCount===0){
        alert('you win');
        newGame=confirm('want to play again?');
        if(newGame){
            initialize();
            newWord();
        };
    }
}

    
};
