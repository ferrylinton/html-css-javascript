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
    const toggleMenu = document.querySelector(".toggle-menu");
    const menuIcon = document.querySelector(".fa-solid");
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelector(".navbar-links");

    document.addEventListener('click', function (event) {
        if (toggleMenu.contains(event.target)) {
            navbar.classList.toggle("show");
            menuIcon.classList.toggle('fa-xmark');
            menuIcon.classList.toggle('fa-bars');
        } else if (!navbarLinks.contains(event.target) && navbar.classList.contains('show')) {
            navbar.classList.remove("show");
            menuIcon.classList.toggle('fa-xmark');
            menuIcon.classList.toggle('fa-bars');
        }
    });

    var currentSliderIndex = 0;
    const sliderContents = document.querySelectorAll(".slider-content");
    const sliderIndicators = document.querySelectorAll(".indicators li");
    const sliderPrevious = document.querySelector(".slider-previous");
    const sliderNext = document.querySelector(".slider-next");

    sliderPrevious.addEventListener('click', function(event){
        sliderContents[currentSliderIndex].classList.remove('active');
        sliderIndicators[currentSliderIndex].classList.remove('active');

        currentSliderIndex = currentSliderIndex  <= 0 ? (sliderContents.length - 1) : (currentSliderIndex - 1)
        sliderContents[currentSliderIndex].classList.add('active');
        sliderIndicators[currentSliderIndex].classList.add('active');
    });

    sliderNext.addEventListener('click', function(event){
        sliderContents[currentSliderIndex].classList.remove('active');
        sliderIndicators[currentSliderIndex].classList.remove('active');

        currentSliderIndex = currentSliderIndex >= 2 ? 0 : currentSliderIndex + 1
        sliderContents[currentSliderIndex].classList.add('active');
        sliderIndicators[currentSliderIndex].classList.add('active');
    })
});

