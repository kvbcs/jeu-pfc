
let button = document.querySelector("button")

// Main game loop
let playAgain = true;
let attempts = 0;
let playerScore = 0
let pcScore = 0


    
    const playGame = () =>{
        while (playAgain) {
// Demander le choix du joueur
let playerChoice = prompt("Choisir (pierre/feuille/ciseaux)").toLowerCase();

// Boucle pour vérifier le prompt
while (playerChoice !== "pierre" && playerChoice !== "feuille" && playerChoice !== "ciseaux") {
    playerChoice = prompt("Entrez pierre, feuille ou ciseaux:").toLowerCase();
}

// Transformer playerChoice en nombre
const choices = { "pierre": 0, "feuille": 1, "ciseaux": 2 };
playerChoice = choices[playerChoice];
console.log("Choix du joueur:", playerChoice);

// Générer un choix aléatoire pour l'ordinateur
const getRandomPfc = (max) => Math.floor(Math.random() * max);
let computerChoice = getRandomPfc(3);
console.log("Choix de l'ordinateur:", computerChoice);

// Associer les nombres aux choix
const choiceNames = ["pierre", "feuille", "ciseaux"];
alert("L'ordinateur a choisi: " + choiceNames[computerChoice]);

// Fonction de comparaison
const comparePfc = (player, computer) => {
    if (player === computer) {
        return "Égalité !";
    } else if (
        (player === 0 && computer === 2) ||
        (player === 1 && computer === 0) ||
        (player === 2 && computer === 1)
    ) {
        playerScore++
        console.log(playerScore);
        
        return "Vous gagnez !";
    } else {
        pcScore++
        console.log(pcScore);
        
        return "Vous perdez !";
    }
};

// Afficher le résultat
alert(comparePfc(playerChoice, computerChoice));

// Ask to play again
 let again = prompt("Voulez vous rejouer? (oui/non)").toLowerCase();
 while (again !== "oui" && again !== "non") {

   again = prompt("Entrez 'oui' or 'non':").toLowerCase();
 }

 playAgain = again === "oui" ? true : false;


}


alert(`Merci d'avoir joué ! Votre score : ${playerScore}, score de l'ordinateur : ${pcScore}`);

}

button.addEventListener("click", playGame)

 