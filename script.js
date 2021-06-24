// const body = document.body;
// const header = document.querySelector('.header');
// const menuBtn = document.querySelector('.nav__toggle');

// function toggleMobileNav() {
//   header.classList.toggle('mobile-nav--active');
// }

// function disableScroll() {
//   body.classList.toggle('disable-scroll');
// }

// menuBtn.addEventListener('click', () => {
//   toggleMobileNav();
//   disableScroll();
// });

const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__links')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('open')
  document.body.classList.toggle('disable-scroll')
})