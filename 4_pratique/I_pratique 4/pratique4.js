let form = document.getElementById("formulaire-contact");
let prenom = document.getElementById("prenom");

form.addEventListener("submit", function (event) {
  //Ici, event représente l’événement déclenché, en l’occurrence la soumission du formulaire.
  //On a besoin de event pour utiliser event.preventDefault(), qui empêche le comportement par défaut du navigateur (soumettre le formulaire et recharger la page).
  event.preventDefault(); // Stopper la soumission

  if (prenom.value.trim() === "") 
    //La méthode trim() en JavaScript sert à supprimer les espaces inutiles au début et à la fin d’une chaîne de caractères.
    {
    alert("Veuillez entrer votre prénom !");
  } else {
    console.log("Formulaire validé (mais non envoyé) !");
  }
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("Page entièrement chargée et prête pour le DOM !");
});
