const playerDisplay = document.createElement('h2');
const computerDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');
const layout = document.querySelector("#btn-bar")
layout.append(playerDisplay, computerDisplay, resultDisplay)

const elements = ["fire", "water", "air", "earth"]
let computerSelection
let playerSelection


for (let i = 0; i < elements.length; i++) {
    const button = document.createElement('button');
    button.id = elements[i];
    button.innerHTML = elements[i];
    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        playerDisplay.innerHTML = `Player: ${playerSelection}`;
        computerRandom();
        obtainResult()
    })
    layout.appendChild(button);
}


const computerRandom = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    computerSelection = randomElement;
    computerDisplay.innerHTML = `Computer: ${randomElement}`;
}

const obtainResult = () => {
    switch (playerSelection + computerSelection) {
        case "fireair":
        case "waterfire":
        case "earthair":
        case "earthfire":
            resultDisplay.innerHTML = "YOU WIN"
            break
        case "airfire":
        case "firewater":
        case "airearth":
        case "earthfire":
            resultDisplay.innerHTML = "YOU LOSE"
            break
        case "airair":
        case "firefire":
        case "waterwater":
        case "earthearth":
            resultDisplay.innerHTML = "DRAW"
            break
    }
}

