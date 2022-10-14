// onclick bounce, move down

export function moveDown() {
  //move down page on click
  const moveDown = document.querySelector(".move-down");
  moveDown.addEventListener("click", () => {
    window.scrollBy(0, window.innerHeight);
  });
}
