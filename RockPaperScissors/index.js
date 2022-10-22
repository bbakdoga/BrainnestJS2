
const Userselection = document.getElementsByClassName('choice');
const display = document.getElementById('result');
const displayPlayer = document.getElementById('result2');
const displayComputer = document.getElementById('result3');
const displayWinner = document.getElementById('result4');

let displayValue = null;
let counter = 0;
let wins = 0;
let losses = 0;
let draws = 0;

Array.from(Userselection).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    gameFunction(button.innerText);
  })
});

// selection array
let selection = ["Rock","Paper","Scissors"];
/**
 * picks a random string from the array
 * @returns randomly selected string
 */
function computerPlay(){
  return selection[Math.floor(Math.random() * selection.length)];
}
/**
 * This function returns the outcome of the game 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns String with game outcome
 */
function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection == computerSelection.toLowerCase()){
    draws++;
    counter++;
    console.log("draw");
    displayValue = "Draw, you both picked " + playerSelection.toLowerCase() + "!";
    display.innerText = displayValue;
    return displayValue;
  }
  if(playerSelection == selection[0].toLowerCase() && computerSelection == selection[2] ||
  playerSelection == selection[1].toLowerCase() && computerSelection == selection[0] || 
  playerSelection == selection[2].toLowerCase() && computerSelection == selection[1]){
    wins++;
    counter++;
    displayValue =  "Win, " + playerSelection + " beats " + computerSelection.toLowerCase() + "!";
    display.innerText = displayValue;
    displayPlayer.innerText = wins;
    return displayValue;
  } 
  else {
    displayValue = "Lose, " +  computerSelection + " beats " + playerSelection.toLowerCase() + "!";
    display.innerText = displayValue;
    losses++;
    counter++;
    displayComputer.innerText = losses;
    return displayValue;
  }
}
/**
 * This main function where playround function is called 5 times
 * Displays the output of the playround and final wins
 * @param userInput
 * @return none
 */
 function gameFunction(userInput){
  displayWinner.innerText = "";
  playRound(userInput,computerPlay());
  if(counter == 5){
    if(wins > losses){
      displayWinner.innerText = "Player wins!";
    } else if (losses > wins ) {
      displayWinner.innerText = "Computer wins!";
    } else  {
      displayWinner.innerText = "It's a draw";
 
    }
    counter = 0;
    wins = 0;
    losses = 0;
    draws = 0; 
    displayComputer.innerText = "";
    displayPlayer.innerText = "";
    display.innerText = "";
  } 
}