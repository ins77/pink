(function() {

  var hamburger = document.querySelector('.main-nav__toggle');
  var nav = document.querySelector('.main-nav');
  var navList = document.querySelector('.main-nav__list');
  var mql = window.matchMedia('(min-width: 1000px)');
  var linkInfo = document.querySelector('.js-link-info');
  var linkFeatures = document.querySelector('.js-link-features');
  var linkReviews = document.querySelector('.js-link-reviews');
  var linkPrice = document.querySelector('.js-link-price');

  hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    hamburger.classList.toggle('main-nav__toggle--active');
    nav.classList.toggle('main-nav--active');
    navList.classList.toggle('main-nav__list--active');
  });

  function setup_for_width(mql) {
    if (mql.matches) {
      hamburger.classList.remove('main-nav__toggle--active');
      navList.classList.remove('main-nav__list--active');
      nav.classList.remove('main-nav--active');
    }
  }
 
  mql.addListener(setup_for_width);

  setup_for_width(mql);
  
})();

