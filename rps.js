function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let random_num = (Math.floor(Math.random()*(options.length)));
    return options[random_num];
}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    playerSelection[0].toUpperCase();

    if (playerSelection == computerSelection) {
        return "Tie game";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }


}