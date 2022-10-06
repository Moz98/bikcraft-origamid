export function accordionList() {
  const allQuestions = Array.from(
    document.querySelectorAll("[data-accordion-select] dt")
  );

  if (allQuestions) {
    function handleClick(target) {
      const clickedQuestion = target.currentTarget;
      const answer = clickedQuestion.nextElementSibling;

      if (answer) {
        clickedQuestion.classList.toggle("condense"); // Show the content
        answer.classList.toggle("appear"); // Show the content

        // Change the aria
        clickedQuestion.classList.contains("condense")
          ? clickedQuestion.setAttribute("aria-expanded", "true")
          : clickedQuestion.setAttribute("aria-expanded", "false");
      }
    }

    allQuestions.forEach((item) => {
      item.addEventListener("click", handleClick);
    });
  }
}
