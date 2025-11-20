let info = document.getElementById('info-scroll');

window.addEventListener('scroll', function() {
    let position = window.scrollY;
    info.textContent = "Position de défilement : " + position +
     " px";
});
