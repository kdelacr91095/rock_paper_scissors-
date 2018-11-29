//sets round to 1
let round = 1;
let computerTotal =0;
let playerTotal =0;
let choice;

function computerPlay() {
    let comHand = Math.floor(Math.random() * 3) + 1;
    return comHand;
}


function roundChange() {


    if (round <= 5) {
        round = round + 1;
    } else {

    }
    
}


function playRound(playerChoice) {
   if(round <= 5) {
    event.preventDefault();
    const playerHand =  parseInt(playerChoice.getAttribute("data-hand"));
    const computerHand = computerPlay();
    let winningHand;

    let player = yourChoice(playerHand);
    let computer = yourChoice(computerHand);

    if (playerHand == 1 && computerHand == 2 || playerHand == 2 && computerHand == 3 || playerHand == 3 && computerHand == 1) {
       winningHand = "Computer Played " + computer + ". You played " + player + ". The Computer Wins! || Round: " + round;
       computerTotal = computerTotal + 1;
    } else if (playerHand == 1 && computerHand == 3 || playerHand == 2 && computerHand == 1 || playerHand == 3 && computerHand == 2) {
        winningHand = "Computer Played " + computer + ", You played " + player + ".  You won the round! || Round: " + round;
        playerTotal = playerTotal + 1;
    } else if (playerHand == computerHand) {
        winningHand = "Computer Played " + computer + ", You played " + player + ".  It's a draw! || Round: " + round;
    }
    appendResults(winningHand);
    let currentResult = document.querySelector("#Round"+round);
    currentResult.classList.toggle("hide");
    currentResult.classList.add("fade");
    whosWinning();
   }
}


function resetGame() {
    round = 1;
    document.getElementById("totalResultLists").innerHTML = "";
    document.getElementById("resultLists").innerHTML = "";
}

function yourChoice(n){
    let s;
    switch (n) {
        case 1:
        s = "Rock";
        break;


        case 2:
        s = "Paper";
        break;

        case 3:
        s = "Scissors";
        break;
    }   

    return s;
}
function whosWinning() {
if(round == 5) {
    if(computerTotal > playerTotal) {
    var newItem = document.createElement("LI");
    newItem.classList.add("fade");
    var textnode = document.createTextNode("Out of 5 rounds, the computer Wins! Try Again!");
    newItem.appendChild(textnode);
    var list = document.getElementById("totalResultLists");
    list.insertBefore(newItem, list.childNodes[0]);
    } else if (computerTotal == playerTotal) {
        var newItem = document.createElement("LI");
        newItem.classList.add("fade");
    var textnode = document.createTextNode("It was a draw! Try Again!");
    newItem.appendChild(textnode);
    var list = document.getElementById("totalResultLists");
    list.insertBefore(newItem, list.childNodes[0]);
    } else {
        var newItem = document.createElement("LI");
        newItem.classList.add("fade");
    var textnode = document.createTextNode("Out of 5 rounds, you won! Good Work!");
    newItem.appendChild(textnode);
    var list = document.getElementById("totalResultLists");
    list.insertBefore(newItem, list.childNodes[0]);
    }
}
}

function appendResults(s) {
    if(round <= 5) {
    var newItem = document.createElement("LI");
    newItem.classList.add('hide');
    newItem.setAttribute("id", "Round"+round);
    var textnode = document.createTextNode(s);
    newItem.appendChild(textnode);
    var list = document.getElementById("resultLists");
    list.insertBefore(newItem, list.childNodes[0]);
    }
}