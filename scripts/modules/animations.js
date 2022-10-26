export function animation() {
  const techSection = document.querySelector("[data-tech]");
  // const insuranceSection = document.querySelector("[data-insurance]");
  // const listSection = document.querySelector("[data-list]");

  document.addEventListener("scroll", (e) => {
    const pageView = window.innerHeight * 0.5;
    const topOfTheSection = techSection.getBoundingClientRect().top;
    const isVisible = topOfTheSection - pageView < 0;
    if (isVisible) {
      techSection.classList.add("show-in");
    }
  });
}
