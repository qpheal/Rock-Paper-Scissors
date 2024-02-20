const prompt = require("prompt-sync")()

let wins = 0
let losses = 0
let ties = 0

const playerChoice = prompt("Enter rock, paper or scissors: ").toLowerCase()
if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
     console.log("Enter valid choice.")
} 

const choice = ["rock", "paper","scissors"]
const randomIndex = Math.round(Math.random() * 2)

const computerChoice = choice[randomIndex]

console.log("the computer chose: ", computerChoice)

if(computerChoice ===  playerChoice){
    console.log("Draw!")
    ties++;
} else if ((playerChoice ===  "paper" && computerChoice === "rock") || 
            (playerChoice ===  "rock" && computerChoice === "scissors") ||
            (playerChoice ===  "scisssors" && computerChoice === "paper")){
                console.log("Win!")
                wins++
            } else {
                console.log("Lost!")
                losses++
            }


