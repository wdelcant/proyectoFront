export function modal() {
  document.querySelector('#show-login').addEventListener('click', function () {
    document.querySelector('.popup-register').classList.remove('active');
    document.querySelector('.popup-login').classList.add('active');
  });

  document
    .querySelector('.popup-login .close-btn')
    .addEventListener('click', function () {
      document.querySelector('.popup-login').classList.remove('active');
    });
}

export function modalRegister() {
  document
    .querySelector('#show-register')
    .addEventListener('click', function () {
      document.querySelector('.popup-login').classList.remove('active');
      document.querySelector('.popup-register').classList.remove('active');
      document.querySelector('.popup-register').classList.add('active');
    });

  document
    .querySelector('.popup-register .close-btn')
    .addEventListener('click', function () {
      document.querySelector('.popup-register').classList.remove('active');
    });
}
