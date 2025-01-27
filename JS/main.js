// Burger Icon Function
let burgerIcon = document.querySelector(".header .container i"),
links = document.querySelector(".header .container .links");

burgerIcon.addEventListener("click" , function () {
    burgerIcon.classList.toggle("fa-close");
    links.classList.toggle("link-toggle");
});

window.addEventListener("scroll", function () {
    burgerIcon.classList.remove("fa-close");
    links.classList.remove("link-toggle");
});

// Change The Color Of NavBar
let nav = document.getElementsByClassName("header")[0];

function navChangeColor () {
    if (window.scrollY >= nav.offsetHeight) {
        nav.style.backgroundColor = "var(--color-primary)";
    } else {
        nav.style.backgroundColor = "transparent";
    }
};

window.onscroll = navChangeColor;

// Open Card
let cards = Array.from(document.querySelectorAll(".about .container .card"));

cards.forEach(function (card) {
    card.addEventListener("click" , function () {
        card.classList.toggle("change");
        card.children[0].classList.toggle("open");
        card.children[1].classList.toggle("open");
        card.children[2].children[1].classList.toggle("read");
})});