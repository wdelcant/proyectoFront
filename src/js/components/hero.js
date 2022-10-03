export function effect() {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('figure');
    hero.classList.toggle('effect', window.scrollY > 0);
  });
}
