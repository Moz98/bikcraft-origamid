export function sticky() {
  const menu = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }
  });
}
