export function imageGallery() {
  const allImgs = Array.from(document.querySelectorAll("[data-bike-img] img"));
  const containerImgs = document.querySelector("[data-bike-img]");
  const media = matchMedia("(min-width: 1000px)").matches;

  if (allImgs && containerImgs && media) {
    function changeImg(e) {
      const clickedImg = e.currentTarget;
      containerImgs.prepend(clickedImg);
    }

    allImgs.forEach((img) => {
      img.addEventListener("click", changeImg);
    });
  }
}
