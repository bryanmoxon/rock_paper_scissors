function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let random_num = (Math.floor(Math.random()*(options.length)));
    return options[random_num];
}

let computerSelection = computerPlay();

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