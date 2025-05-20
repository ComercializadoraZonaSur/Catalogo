// script.js (por ahora solo activa el carrusel si lo necesitas para JS personalizado)
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselHeader');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});
