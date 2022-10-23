export function loader() {
  window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    loader /* Agregar la clase `oculto` al cargador. */.className += ' hidden';
  });
}
