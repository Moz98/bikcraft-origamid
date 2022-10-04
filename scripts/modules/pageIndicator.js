export function pageIndicator() {
  const allLinks = Array.from(
    document.querySelectorAll("[data-primary-menu] a")
  );

  if (allLinks) {
    allLinks.forEach((link) => {
      const page = window.location.href;
      const href = link.getAttribute("href");
      if (page.includes(href)) {
        link.classList.add("actual-page");
      }
    });
  }
}
