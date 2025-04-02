
// Main game loop
let playAgain = true;
let attempts = 0;
let score = 0


while (playAgain) {
// Demander le choix du joueur
let playerChoice = prompt("Choisir (pierre/feuille/ciseaux)").toLowerCase();
console.log(playerChoice);
while (playerChoice !== "pierre" && playerChoice !== "feuille" && playerChoice !== "ciseaux") {
    playerChoice = prompt("Entrez pierre, feuille ou ciseaux:").toLowerCase();
  }

//math random pfc
let pfc0 = "pierre"
let pfc1 = "feuille"
let pfc2 = "ciseaux"

const getRandomPfc = (max) =>{
    return Math.floor(Math.random() * max);

}
let computerChoice = getRandomPfc(3)
console.log(computerChoice);

//alert choix ordinateur
alert(computerChoice)
//fonction compare les 2

// const comparePfc = () =>{
    
// }
//égalité = les 2 gagnent, alert montre résultats
//rejouer = comfirm
//gérer cas invalides (isnan)
//bonus : compter nbre victoires