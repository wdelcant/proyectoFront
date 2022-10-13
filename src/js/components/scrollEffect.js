export function waveEffect() {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.waveEffect');
    hero.classList.toggle('effect', window.scrollY > 0);
  });
}

export function btnEffect() {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.btnEffect');
    hero.classList.toggle('effect', window.scrollY > 0);
  });
}
