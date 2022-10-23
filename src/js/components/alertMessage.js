import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function alertMessage(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    newWindow: true,
    gravity: 'bottom', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true,
    // `info`, `success`, `warning` and `error`
    backgroundColor:
      type === 'success'
        ? 'linear-gradient(to right, #9f1cbe, #b599d5)'
        : 'linear-gradient(to right, #ff5f6d, #ffc371)',
  }).showToast();
}
