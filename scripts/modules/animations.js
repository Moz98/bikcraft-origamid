export function animation() {
  const techSection = document.querySelector("[data-tech]");
  const insuranceSection = document.querySelector("[data-insurance]");

  const listOfSections = [techSection, insuranceSection];

  document.addEventListener("scroll", (e) => {
    const pageView = window.innerHeight * 0.5;

    listOfSections.forEach((section) => {
      const topOfTheSection = section.getBoundingClientRect().top;
      const isVisible = topOfTheSection - pageView < 0;
      if (isVisible) {
        section.classList.add("ativo");
      }
    });
  });
}
