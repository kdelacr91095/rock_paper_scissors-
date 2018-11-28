let gameChoices = ['rock', 'paper', 'scissors'];
let round = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*gameChoices.length);
  return gameChoices[randomNumber];
}

// function playerSelection() {
//   let choice = prompt("Please enter a move:");
//   return choice;
// }

function playGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
      return 'win';
  } else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
      computerSelection === 'paper' && playerSelection === 'rock' ||
      computerSelection === 'scissors' && playerSelection === 'paper') {
      return 'lose';
  } else {
      return 'tie';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {

    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    console.log(`Computer played "${computerSelection}"`);
    const consoleOutput = playGame(playerSelection, computerSelection);
    console.log(consoleOutput);

    if (consoleOutput.includes("win", 3)) {
      ++playerScore;
    }else {
      ++computerScore;
    }
  }

  if (playerScore < computerScore){
    console.log("You lose the game.");
  } else if (playerScore > computerScore) {
    console.log("You win the game");
  } else {
    console.log("You are tied");
  }
  }