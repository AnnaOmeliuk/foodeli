const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {


768: {
      slidesPerView: 0.5,
      spaceBetween: 35
},

    1024: {
      slidesPerView: 1.3,
      spaceBetween: 35,
    },
    1440: {
            slidesPerView: 2,
      spaceBetween: 35,
    }
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
