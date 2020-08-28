// I took it from stackoverflow

var btnScrollDown = document.querySelector('.scroll-down');

function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;

    (function scroll() {
        if (Math.ceil(window.pageYOffset) < Math.ceil(windowCoords)) {
            window.scrollBy(0, 10);
            setTimeout(scroll, 2);
        }
            if (Math.ceil(window.pageYOffset) > Math.ceil(windowCoords)) {
                window.scrollTo(0, Math.ceil(windowCoords));
        }
    })();
};

btnScrollDown.addEventListener('click', scrollDown);