function computerPlay(){
    const outcomes = ["rock", "paper", "scissor"]
    return outcomes[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    const resultsContainer = document.querySelector(".results");
    const results = document.querySelector(".result");
    var playerResults = parseInt(document.querySelector("#playerResults").textContent, 10);
    var computerResults = parseInt(document.querySelector("#computerResults").textContent, 10);
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissor" && computerSelection === "scissor")){
        result = "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "You Lose! Paper beats Rock";
        computerResults++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        result = "You Win! Rock beats Scissor";
        playerResults++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result =  "You Win! Paper beats Rock";
        playerResults++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        result =  "You Lose! Scissor beats Paper";
        computerResults++;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        result =  "You Lose! Rock beats Scissor";
        computerResults++;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        result = "You Win! Scissor beats Paper";
        playerResults++;
    }
    results.textContent = result;
    document.querySelector("#playerResults").textContent = playerResults;
    document.querySelector("#computerResults").textContent = computerResults;

    if (playerResults === 5 || computerResults === 5){
        var winStatus = document.createElement('p');
        if (playerResults === 5){
            winStatus.textContent = "You have won!";
        }
        else {
            winStatus.textContent = "The computer has won!";
        }
        resultsContainer.appendChild(winStatus);
    }
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");

var playerResults = parseInt(document.querySelector("#playerResults").textContent, 10);
var computerResults = parseInt(document.querySelector("#computerResults").textContent, 10);

btnRock.addEventListener("click", function () {
    if (playerResults != 5 || computerResults != 5){
        playRound('rock', computerPlay());
    }
});
btnPaper.addEventListener("click", function () {
    if (playerResults != 5 || computerResults != 5){
        playRound('paper', computerPlay());
    }
})
btnScissor.addEventListener("click", function () {
    if (playerResults != 5 || computerResults != 5){
        playRound('scissor', computerPlay());
    }
});