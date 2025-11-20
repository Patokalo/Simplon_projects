let bouton = document.getElementById('btn-magique');
let message = document.getElementById('message');

bouton.addEventListener('click', function() {
    message.textContent = "Le bouton a été cliqué à l'instant.";

    // Effacer après 3 secondes
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
});
