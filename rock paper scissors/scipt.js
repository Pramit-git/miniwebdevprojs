const choices = ["rock", "paper", "scissors"]
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const resultdisplay = document.getElementById("result")

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

    }
    player.textContent = `Player : ${playerchoice}`;
    computer.textContent = `Computer : ${computerchoice}`;
    resultdisplay.textContent = result;
}