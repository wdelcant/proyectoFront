export function loader() {
  window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    loader.className += ' hidden';
  });
}
