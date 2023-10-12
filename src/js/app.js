const addEventOnElements = function (elem, eventType, callBak) {
  if (elem.length >= 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(eventType, callBak);
    }
  } else {
    elem.addEventListener(eventType, callBak);
  }
};

// header navigation
const headerNav = document.querySelector('.header-nav');
const headerBtn = document.querySelectorAll('.headerBtn');
const overlay = document.querySelector('.overlay');

const toggleNav = function () {
  headerNav.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList('nav-active');
};
addEventOnElements(headerBtn, 'click', toggleNav);
addEventOnElements(overlay, 'click', toggleNav);

// stiky header window scroll down
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// accordion
const accordionCard = document.querySelectorAll('.accordion-card');
let lastActiveAccordion = accordionCard[0];
const initAccordion = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector('.accordion-top');
  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove('active');
    }
    currentAccordion.classList.toggle('active');
    lastActiveAccordion = currentAccordion;
  };

  accordionBtn.addEventListener('click', expandAccordion);
};
for (let i = 0; i < accordionCard.length; i++) {
  initAccordion(accordionCard[i]);
}

// accordionCard.forEach((el) => {

//   initAccordion()
// });
