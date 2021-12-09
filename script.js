function computerPlay(){
    const outcomes = ["Rock", "Paper", "Scissor"]
    return outcomes[Math.floor(Math.random() * 3)]
}

// console.log(computerPlay())