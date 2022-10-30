export function slider() {
  const slider = document.querySelector('#slider');
  let sliderSection = document.querySelectorAll('.slider__section');
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  // botones
  const btnLeft = document.querySelector('#btn-left');
  const btnRight = document.querySelector('#btn-right');

  // Insertar sliderSectionLast al primer lugar
  slider.insertAdjacentElement('afterbegin', sliderSectionLast);

  // Función para mover las imágenes a la derecha
  function next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function () {
      slider.style.transition = 'none';
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = '-100%';
    }, 500);
  }

  // Función para mover las imágenes a la izquierda
  function prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function () {
      slider.style.transition = 'none';
      slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      slider.style.marginLeft = '-100%';
    }, 500);
  }

  // Eventos para los botones de la derecha e izquierda
  btnRight.addEventListener('click', function () {
    next();
  });

  btnLeft.addEventListener('click', function () {
    prev();
  });

  // Función para que las imágenes se muevan automáticamente
  setInterval(function () {
    next();
  }, 5000);
}

// Language: javascript
