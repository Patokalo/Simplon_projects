let parent = document.getElementById('parent');
let enfant = document.getElementById('enfant');

parent.addEventListener('click', function() {
    console.log("Click sur le Parent");
});

enfant.addEventListener('click', function(event) {
    console.log("Click sur l'Enfant");

    // Essaye avec puis sans cette ligne :
    event.stopPropagation();
});

let btnTest = document.getElementById('btn-test');
let btnStop = document.getElementById('btn-desactiver');

function alerteMessage() {
    alert("Alerte !");
}

btnTest.addEventListener('click', alerteMessage);

btnStop.addEventListener('click', function() {
    btnTest.removeEventListener('click', alerteMessage);
    console.log("Alerte désactivée.");
});
