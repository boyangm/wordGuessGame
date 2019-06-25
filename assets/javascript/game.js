 window.onload=function(){
const movieTitles = [
    "star wars",
    "rush hour",
    "princess bride"
];
var chosenWord=[];
const guessArea= document.querySelector("#guessArea");
const guessText = document.querySelector("#guessText");
let i;
let blank =[];
let mark=0;
function newWord () {
     i = Math.floor(Math.random()* movieTitles.length);
    chosenWord= movieTitles[i].split("");
    console.log(chosenWord);
    blank= [];
    for ( let j = 0; j <= movieTitles[i].length ; j++){
        blank.push("-");
        guessArea.textContent= blank.join(" ");
        console.log(i);
    }
}
newWord();
document.onkeyup = function(event){
    var r = event.key;
    mark = movieTitles[i].indexOf(r);
    console.log(mark);
};
};