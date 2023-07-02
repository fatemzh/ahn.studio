document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.changeSlide = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.querySelectorAll(".carousel-slide img");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
