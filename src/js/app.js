const headerNav = document.querySelector('.header-nav');
//const headerNavClose = document.querySelector('.header-nav__close');
const headerBtn = document.querySelectorAll('.headerBtn');
const overlay = document.querySelector('.overlay');

const addEventOnElements = function (elem, eventType, callBak) {
  if (elem.length >= 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(eventType, callBak);
    }
  } else {
    elem.addEventListener(eventType, callBak);
  }
};
const toggleNav = function () {
  headerNav.classList.toggle('active');
  overlay.classList.toggle('active');
  //document.body.classList('active');
};
addEventOnElements(headerBtn, 'click', toggleNav);
addEventOnElements(overlay, 'click', toggleNav);
