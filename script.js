function computerPlay(){
    const outcomes = ["rock", "paper", "scissor"]
    return outcomes[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissor" && computerSelection === "scissor")){
        return "Tie!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! Rock beats Scissor"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor"
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper"
    }
    else {
        return "Invalid Input!"
    }
}

function game(){
    let count = 0
    var input
    while (count < 4){
        input = prompt("Input a move!")
        console.log(playRound(input, computerPlay()))
    }
}

game()

// console.log(computerPlay())