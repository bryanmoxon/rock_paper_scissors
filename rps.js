function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let random_num = (Math.floor(Math.random()*(options.length)));
    return options[random_num];
}

function capitalize(string) {
    Capitalized = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return Capitalized;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection == computerSelection) {
        return "Tie game";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    w = 0;
    l = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Rock, Paper, Scissors?");
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            w = w+1;
        } else if (result.includes("lose")) {
            l = l+1;
        }
    }
    if (l < w) {
        return "You win the round of 5!";
    } else {
        return "You lose the round of 5.";
    }
}