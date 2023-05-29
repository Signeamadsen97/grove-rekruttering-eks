const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    hamburger.classList.toggle('hamburger-open');
});