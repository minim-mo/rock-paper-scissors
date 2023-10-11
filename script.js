// console.log("Hello World");

const computerPick = document.getElementById('computer-pick');
const youPick = document.getElementById('you-pick');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    youPick.innerHTML = userChoice;
    generateComputerPick()
    getResult()
}))

function generateComputerPick() {
    const randomNumber = Math.random() * 3; //or  possibleChoices.length
    console.log(randomNumber);
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerPick.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
    }

}