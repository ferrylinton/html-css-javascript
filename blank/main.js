Document.prototype.ready = function (callback) {
    if (callback && typeof callback === 'function') {
        document.addEventListener("DOMContentLoaded", function () {
            if (document.readyState === "interactive" || document.readyState === "complete") {
                return callback();
            }
        });
    }
};

document.ready(function () {
    console.log('ready...')
});