const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navbarItem = document.querySelectorAll('.nav-list');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    hamburger.classList.toggle('hamburger-open');
});