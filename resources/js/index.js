const navMenu = document.querySelector('.navbar-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

const hamburgerToggle = () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', hamburgerToggle);

navLinks.forEach((link) => link.addEventListener('click', hamburgerToggle));

// back to top btn
const backToTopBtn = document.querySelector('#backToTopButton');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});