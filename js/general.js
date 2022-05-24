(function(){
    // * selector functions
    window.$ = function (el) {
        return document.querySelector(el);
    }
    window.$$ = function (els) {
        return document.querySelectorAll(els);
    }
    // ! debounce
    window.debounce = (func, wait, immediate) => {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
})();