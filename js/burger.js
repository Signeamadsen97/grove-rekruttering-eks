const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links li');

for (i = 0; i < navLinks.length; i++) {
    content.style.display = block;
    }

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    hamburger.classList.toggle('hamburger-open');
});