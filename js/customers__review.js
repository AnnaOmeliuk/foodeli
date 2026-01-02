const swiper = new Swiper(".customers__review--slider", {
  loop: true,
  clickable: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
