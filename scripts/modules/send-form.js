export function sendForm() {
  const budgetForm = document.querySelector("[data-form-budget]");
  const contactForm = document.querySelector("[data-form-contact]");

  const formsList = [budgetForm, contactForm];

  const sendData = (e) => {
    e.preventDefault();
    const button = document.querySelector("button");
    button.disabled = true;

    const data = new FormData(e.target);

    const name = data.get("name");
    const email = data.get("email");

    e.target.innerHTML = `<p class='font-1-m-b p1 container-1 span2'>Obrigado pela sua solitação ${name}. Um e-mail com mais informações foi enviado para endereço ${email} </p>`;
    e.target.style.backgroundColor = "#fff";
  };

  formsList.forEach((form) => {
    if (form) {
      form.addEventListener("submit", sendData);
    }
  });
}
