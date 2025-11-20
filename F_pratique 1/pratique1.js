// Cibler le titre et changer son texte
let titre = document.querySelector("#titre-principal");
titre.textContent = "DOM Maîtrisé !";

// Cibler le premier .item-liste
let premierItem = document.querySelector(".item-liste");
premierItem.textContent = "Premier élément sélectionné";

// BONUS : Sélectionner tous les items
let tousLesItems = document.querySelectorAll(".item-liste");
console.log(tousLesItems);
