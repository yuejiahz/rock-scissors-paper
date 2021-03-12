let playerScore = 0;
let computerScore = 0;
let computerSelection, playerSelection, status;
let matchNum = 0;

//select buttons 
const rock = document.querySelector('#rock-player');
const paper = document.querySelector('#paper-player');
const scissors = document.querySelector('#scissors-player');
const playerButton = document.getElementById(`${playerSelection}`);
const startButton = document.querySelector('#start-game');

// add Event Listener for buttons
rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
startButton.addEventListener('click', refreshPage);

//select computer's button and add event listener to remove animations
const btn = document.querySelectorAll('.computer-buttons');
btn.forEach(btn => btn.addEventListener('transitionend', removeTransition));

function playerPlay(e) {
    const playerSelection = document.querySelector(`button[id="${e.target.id}"]`);
    return playerSelection.id;
}

function computerPlay() {

    computerSelection = Math.floor(Math.random() * 3 + 1);

    if (computerSelection == 1) {
        return computerSelection = "rock";
    }
    else if (computerSelection == 2) {
        return computerSelection = "scissors";
    }
    else if (computerSelection == 3) {
        return computerSelection = "paper";
    }

}

function playRound(playerSelection, computerSelection) {
    matchCount();
    const playerButton = document.getElementById(`${playerSelection}`);
    const computerButton = document.getElementById(`${computerSelection}` + "-computer");

    if (computerSelection === playerSelection) {
        document.getElementById('announce').innerHTML = "Fair game, please try again!";
        computerButton.classList.add('fair');
        status = "fair game";

    }
    else if
        ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        computerScoreCount();
        computerButton.classList.add('winner');
        document.getElementById('announce').innerHTML = "Computer score 1 point!";
    }
    else if (playerSelection) {
        playerScoreCount();
        computerButton.classList.add('loser');
        document.getElementById('announce').innerHTML = "Not bad, player score 1 point! ";
    }
}

function computerScoreCount() {
    status = "computer win";
    document.getElementById('computer-scoreboard').innerHTML = ++computerScore;
}

function playerScoreCount() {
    status = "player win";
    document.getElementById('player-scoreboard').innerHTML = ++playerScore;
}

function matchCount() {
    document.querySelector('#matchcount').innerHTML = ++matchNum;
}

function removeTransition(e) {
    if (e.propertyName !== 'border-bottom-color') return;
    if (status == 'computer win') {
        this.classList.remove('winner');
    }
    else if (status == 'player win') {
        this.classList.remove('loser');
    }
    else if (status == 'fair game') {
        this.classList.remove('fair');
    }
}

function game(playerSelection) {
    if ((computerScore <= 5) || (playerScore <= 5)) {
        player = playerPlay(playerSelection);
        computer = computerPlay();
        playRound(player, computer);
        if ((computerScore >= 5) || (playerScore >= 5)) {
            announceWinner();
        }
    }
}


function announceWinner() {
    rock.removeEventListener('click', game);
    paper.removeEventListener('click', game);
    scissors.removeEventListener('click', game);

    if (computerScore == 5) {
        document.getElementById('announce').innerHTML = "YOU LOSE THE GAME!!! ";
    }
    else if (playerScore == 5) {
        document.getElementById('announce').innerHTML = "CONGRATULATIONS YOU WIN!!!";
    }
    document.getElementById('announce').classList.add('final-winner');

}

function refreshPage(){
    window.location.reload(true);
}




