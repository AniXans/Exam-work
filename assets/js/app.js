// HAMBURGER-MENU
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-collapse');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('active');
})