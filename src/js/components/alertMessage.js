import Toastify from 'toastify-js';

export function alertMessage(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    backgroundColor:
      type === 'success'
        ? 'linear-gradient(to right, #00b09b, #96c93d)'
        : 'linear-gradient(to right, #ff5f6d, #ffc371)',
    stopOnFocus: true,
  }).showToast();
}
