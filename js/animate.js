// анімація при скролі
// const animatedBlocks = document.querySelectorAll(".animate");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("is-visible");
//     }
//   });
// }, {
//   threshold: 0.2
// });

// animatedBlocks.forEach(block => observer.observe(block));

// stagger анімація
const staggerContainers = document.querySelectorAll(".animate-stagger");

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.children;

      [...items].forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("is-visible");
        }, index * 350); // затримка між елементами
      });

      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

staggerContainers.forEach(container => staggerObserver.observe(container));


/* -------------------------------------------------------------------------- */

