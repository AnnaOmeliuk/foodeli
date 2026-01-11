
  const accordionButtons = document.querySelectorAll(".footer__accordion-btn");

  accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.closest(".footer__list");
      list.classList.toggle("is-open");
    });
  });

