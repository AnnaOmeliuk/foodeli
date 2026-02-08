const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0,
    },

    425: {
      slidesPerView: 1.3,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 1.5,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 2.2,
      spaceBetween: 35,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
