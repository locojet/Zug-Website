// Funktion für Hamburger icon

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


// Funktion für zug




        let scrollY = window.scrollY;
let zugPosition = 0;
const dampingFactor = 2; // Ein Dämpfungsfaktor, um die Bewegung zu verlangsamen

window.addEventListener("scroll", () => {
    const newY = window.scrollY;
    const deltaY = newY - scrollY;
    const zugElement = document.querySelector(".zug");
    zugPosition += deltaY * dampingFactor;
    zugElement.style.left = zugPosition + "px";

    scrollY = newY;
});