const choices = ["rock", "paper", "scissors"]
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const resultdisplay = document.getElementById("result")
const computerres = document.getElementById("computercount")
const playerres = document.getElementById("playercount")
let playercount = 0;
    let computercount = 0;
function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerchoice === computerchoice) {
        result = "It's a tie!"
    }
    else {
        switch (playerchoice) {
            case "rock":
                if (computerchoice === "scissors") {
                    result = "You win!"
                }
                else {
                    result = "You lose!"
                }
                break;
            case "paper":
                if (computerchoice === "rock") {
                    result = "You win!"
                }
                else {
                    result = "You lose!"
                }
                break;
            case "scissors":
                if (computerchoice === "paper") {
                    result = "You win!"
                }
                else {
                    result = "You lose!"
                }
                break;
        }
        switch(result){
            case "You win!":
                playercount = playercount+1;
                break;
            case "You lose!":
                computercount = computercount+1;
                break;
        }
    }
    playerres.textContent = `Player score : ${playercount}`;
    computerres.textContent = `Computer score :${computercount}`;    
    player.textContent = `Player : ${playerchoice}`;
    computer.textContent = `Computer : ${computerchoice}`;
    resultdisplay.textContent = result;
}