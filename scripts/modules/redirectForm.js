export function redirectForm() {
  const paramaters = new URLSearchParams(window.location.search);

  paramaters.forEach((paramater) => {
    if (paramater) {
      const dataForm = document.querySelectorAll("[data-product] input");
      dataForm.forEach((input) => {
        if (paramater == input.getAttribute("value")) {
          input.checked = true;
        }
      });
    }
  });
}
