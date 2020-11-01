var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    speed: 3000,
    autoplay: {
        delay: 1000
    },
    paginationClickable: true,
    parallax: true,
    autoplayDisableOnInteraction: false,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});