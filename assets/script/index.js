'use strict';

function addSmoothTransition(element, className) {
    element.classList.add(className);

    setTimeout(() => {
        element.classList.remove(className);
    }, 10);
}

window.onload = function() {
    var container = document.getElementById('container');
    addSmoothTransition(container, 'zoomIn');
};
