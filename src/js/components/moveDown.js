export function moveDown() {
  const moveDown = document.querySelector('.move-down');

  moveDown.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
}
