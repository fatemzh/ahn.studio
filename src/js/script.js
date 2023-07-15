//Carousel

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    window.changeSlide = function(n) {
        clearInterval(interval); // stop le carousel quand les flèches sont utilisées
        showSlides(slideIndex += n);
        interval = setInterval(showSlides, 3000); // redémarre le carousel
    }

    function showSlides(n) {
        let i;
        const slides = document.querySelectorAll(".carousel-slide img");
        if (n === undefined) n = ++slideIndex;
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace(" fade-in", "");
        }
        slides[slideIndex - 1].className += " fade-in";
    }

    // Faire défiler les images toutes les 2 secondes
    let interval = setInterval(showSlides, 3000); // 3000ms = 3s
});

 window.onload = function() {
     var text = "collect images. ";
     var repeatCount = 20000;  // Répétez le texte 100 fois

     var repeatedText = text.repeat(repeatCount);

     var marqueeContent = document.querySelector(".marquee-content");
     marqueeContent.textContent = repeatedText;
     marqueeContent.setAttribute("data-content", repeatedText);
 }
 
 window.onload = function() {
    var closeButton = document.getElementById('closeBanner');
    closeButton.onclick = function() {
        var banner = document.getElementById('banner');
        banner.style.display = 'none';
    }
}