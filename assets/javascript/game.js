 window.onload=function(){
const movieTitles = [
    "star wars",
    "rush hour",
    "princess bride"
];
let chosenWord=[];
const lettersGuessed= []; 
let attempts = 10;
let LetterCount = 0;

const guessArea= document.querySelector("#guessArea");
const guessText = document.querySelector("#guessText");
const attemptsText= document.querySelector('#attempts');
let i; 
let blank =[];
let mark=0;
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
document.onkeyup = function(event){
    if (attempts > 0){
        var r = event.key;
        attemptsText.textContent= attempts;
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
        if ((r >= "a") && (r <= "z")){
            lettersGuessed.push(r);
            // guessText.textContent= "";
            guessText.textContent= lettersGuessed.join(' ');
            // console.log(lettersGuessed);
        }

    } else {
        alert('you are out of tries');
    }
    if(LetterCount===0){
        alert('you win');
    }
}

    
};
