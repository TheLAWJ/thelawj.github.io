'use strict';

window.onload = function () {
    var elem = document.querySelector('#submit');
    resize(elem);
    window.onresize = function () {
        resize(elem);
    };
};
function resize(elem) {
    if (window.innerWidth <= 400) {
        elem.value = 'Отправить';
    } else {
        elem.value = 'Отправить заявку';
    }
}
//# sourceMappingURL=main.js.map
