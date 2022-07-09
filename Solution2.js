const computer = document.querySelector("#computer")
const player = document.querySelector("#player")
const result = document.querySelector("#result")

const elements = ["fire", "water", "air", "earth"]

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

// -----REFACTORED CODE USING A FOR LOOP----
for (let i = 0; i < elements.length; i++) {
    const elButton = document.querySelector(`#${elements[i]}`);
    elButton.addEventListener('click', () => {
        player.textContent = elements[i];
        computer.textContent = computerSelection();
        let playerPlay = elements[i];
        let computerPlay = computerSelection();
        decideWinner(playerPlay, computerPlay);
    })
};

function computerSelection() {
    return elements[Math.floor(Math.random() * elements.length)]
}

// (USE THE UPDATE COUNTER FUNCTION WHEN MADE SO THAT WHEN THE RESULT COMES OUT, UPDATE THE PLAYER AND COMP COUNTER RESPECTIVELY)
// ADD MORE CONDITIONALS AS WELL FOR WIN/LOSE CONDITIONS
function decideWinner(playerPlay, computerPlay) {
    switch (playerPlay + computerPlay) {
        case "fireair":
        case "waterfire":
        case "earthair":
        case "earthfire":
            result.textContent = "You win the battle!";
            break
        case "airfire":
        case "firewater":
        case "airearth":
        case "fireearth":
            result.textContent = "You lose the battle!";
            break
        case "airair":
        case "firefire":
        case "waterwater":
        case "earthearth":
            result.textContent = "Draw";
            break
    }
}