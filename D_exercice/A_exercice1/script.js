// Je Cible le bouton
const bouton = document.getElementById("btn-changer-couleur");

bouton.addEventListener("click", function () {

    // --- Partie A : BOM ---
    alert("Largeur : " + window.innerWidth + "px\n" +
          "Hauteur : " + window.innerHeight + "px");

    // --- Partie B : setProperty ---
    const racine = document.documentElement;

    // Modification de la variable CSS
    racine.style.setProperty("--couleur-primaire", "red");
});
