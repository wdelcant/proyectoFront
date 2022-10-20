import Toastify from 'toastify-js';
import { alertMessage } from '../components/alertMessage';

// creamos una constante para document y asi solo usar d
const d = document;

function contactForm() {
  // Valida formulario y realiza petición API para envío de correo

  const $form = d.querySelector('.contact-form');
  $inputs = d.querySelectorAll('.contact-form [required]');

  $inputs.forEach(input => {
    const $span = d.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('contact-form-error', 'none');
    input.insertAdjacentElement('afterend', $span);
  });
  // Valida la entrada del input al sacar el mouse de esta
  d.addEventListener('keyup', e => {
    if (e.target.matches('.contact-form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      // agrega un cartel de error según lo que pongamos en tittle de los inputs
      if (pattern && $input.value !== '') {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add('is-active')
          : d.getElementById($input.name).classList.remove('is-active');
      }

      if (!pattern) {
        return $input.value !== ''
          ? d.getElementById($input.name).classList.remove('is-active')
          : d.getElementById($input.name).classList.add('is-active');
      }
    }
  });

  // Valida el botón enviar y previene que la pagina se refresque
  d.addEventListener('submit', e => {
    e.preventDefault();
    const $loader = d.querySelector('.contact-form-loader'),
      $response = d.querySelector('.contact-form-response');

    $loader.classList.remove('none');

    // API envía correo electrónico a traves de una petición AJAX

    //Aquí el usuario debe cambiar el parámetro por su correo y realizar la activación de la API
    fetch('https://formsubmit.co/ajax/wilsondelcanto.redes@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then(respuesta =>
        respuesta.ok ? respuesta.json() : Promise.reject(res)
      )
      // Si la respuesta es correcta toma 3 segundos en realizar el envío
      .then(json => {
        console.log(json);
        // agrega un loader debajo del botón enviar
        $loader.classList.add('none');
        // remueve el loader una vez realizada la petición
        $response.classList.remove('none');
        // agrega un mensaje de la API
        $response.innerHTML = `<p>${json.message}</p>`;
        // Si es ok, envía una alerta con datos enviados
        alertMessage(json.message, 'success');
      })
      // Si la respuesta de la API es errónea arroja un error
      .catch(error => {
        alertMessage(error, 'error');
        $loader.classList.add('none');
        let message =
          error.statusText || 'Ocurrió un error al enviar, intenta nuevamente';
        $response.innerHTML = `<p>Error ${error.status}:${message}</p>`;
      })
      .finally(() =>
        setTimeout(() => {
          $response.classList.add('none');
          $response.innerHTML = '';
        }, 3000)
      );
  });
}
document.addEventListener('DOMContentLoaded', contactForm);
