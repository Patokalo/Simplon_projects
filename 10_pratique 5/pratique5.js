let boites = document.querySelectorAll(".boite-couleur");

boites.forEach((boite, index) => {
  boite.addEventListener("click", function () {
    console.log("Vous avez cliqué sur la boîte n° " + (index + 1));

    // Couleur verte pour celle cliquée
    boites.forEach((b) => (b.style.background = "gray")); // toutes en gris
    boite.style.background = "green"; // celle cliquée en vert
  });
});
