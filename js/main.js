(function() {
  'use strict';

  let btnScrollDown = document.querySelector('.scroll-down');

  function scrollDown() {
    let windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 5);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();