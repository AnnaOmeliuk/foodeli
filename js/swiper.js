const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 35,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
