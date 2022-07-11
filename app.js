// ---FOR THE ELEMENTS BATTLE--
const computer = document.querySelector("#computer")
const player = document.querySelector("#player")
const result = document.querySelector("#result")

// ---FOR THE COUNTER---
const pDisplay = document.querySelector("#playerDisplay")
const cDisplay = document.querySelector("#compDisplay")

// ---FOR THE ROUNDS AND RESET FUNCTION
const resetButton = document.querySelector("#reset");
const winScoreSelect = document.querySelector("#round");
let winScore = 3;

// GLOBAL VARIABLES
const elements = ["fire", "water", "air", "earth"]
let playerScore = 0;
let computerScore = 0;


// -----REFACTORED CODE USING A FOR LOOP----
for (let i = 0; i < elements.length; i++) {
    const elButton = document.querySelector(`#${elements[i]}`);
    elButton.addEventListener('click', () => {
        let playerPlay = elements[i];
        let computerPlay = computerSelection();
        decideWinner(playerPlay, computerPlay);
        player.textContent = elements[i];
        computer.textContent = computerPlay;
        updateCounter();
    })
};

function computerSelection() {
    return elements[Math.floor(Math.random() * elements.length)]
}

function decideWinner(playerPlay, computerPlay) {
    switch (playerPlay + computerPlay) {
        case "fireair":
        case "waterfire":
        case "earthair":
        case "earthfire":
        case "waterearth":
            result.innerHTML = "You win the battle!"
            break
        case "airfire":
        case "firewater":
        case "airearth":
        case "fireearth":
        case "earthwater":
            result.innerHTML = "You lost the battle!"
            break
        case "airair":
        case "firefire":
        case "waterwater":
        case "earthearth":
            result.innerHTML = "Draw";
            break
    }
}

function updateCounter() {
    if (result.innerHTML === "You win the battle!") {
        playerScore += 1;
        pDisplay.textContent = playerScore;
    } else {
        computerScore += 1;
        cDisplay.textContent = computerScore;
    }
}


winScoreSelect.addEventListener('change', () => {
    winScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset);

function reset() {
    pDisplay.textContent = 0;
    cDisplay.textContent = 0;
    computer.textContent = "";
    player.textContent = "";
    result.textContent = "";
}






// -----ORIGINAL CODE------
// const fire = document.querySelector("#fire");
// const water = document.querySelector("#water");
// const earth = document.querySelector("#earth");
// const air = document.querySelector("#air");

// function playerSelection() {
//     fire.addEventListener("click", function () {
//         player.textContent = "fire";
//         computer.textContent = computerSelection();
//     })

//     water.addEventListener("click", function () {
//         player.textContent = "water";
//         computer.textContent = computerSelection();
//     })

//     earth.addEventListener("click", function () {
//         player.textContent = "earth";
//         computer.textContent = computerSelection();
//     })

//     air.addEventListener("click", function () {
//         player.textContent = "air";
//         computer.textContent = computerSelection();
//     })
// }