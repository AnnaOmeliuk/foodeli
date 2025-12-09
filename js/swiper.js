const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
          slidesPerView: 0.5
    },
    768: {
      slidesPerView: 0.5,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 1.3,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
