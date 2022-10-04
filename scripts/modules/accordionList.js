export function accordionList() {
  const allQuestions = Array.from(
    document.querySelectorAll("[data-accordion-select] dt")
  );

  if (allQuestions) {
    function handleClick(target) {
      const clickedQuestion = target.currentTarget;
      const answer = clickedQuestion.nextElementSibling;

      if (answer) {
        clickedQuestion.classList.toggle("condensed");
        answer.classList.toggle("appear");
      }
    }

    allQuestions.forEach((item) => {
      item.addEventListener("click", handleClick);
    });
  }
}
