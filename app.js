//Refactorizar algunas variables como constantes
const STARTING_POKER_CHIPS = 100; //points
const PLAYER = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome to Texas Holdem. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} on their pot. We have an exciting game ahead of us. May the best player win!`)


//crear variables para representar a los jugadores
let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

//simular una ronda del juego
playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

//evaluar el estado del juego
gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || //three has one
               ((playerTwoPoints + playerThreePoints) == 0) || //one has won
               ((playerOnePoints + playerThreePoints) == 0); // two has won
               console.log("Game has ended: ", gameHasEnded )




