const navMenu = document.querySelector('.navbar-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

const hamburgerToggle = () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', hamburgerToggle);

navLinks.forEach((link) => link.addEventListener('click', hamburgerToggle));
