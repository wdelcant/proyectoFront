export function navBar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', () => {
    //Animación de los links
    navLinks.classList.toggle('open');
    links.forEach(link => {
      link.classList.toggle('fade');
    });

    //Animación del menu hamburguesa
    hamburger.classList.toggle('toggle');
  });
  return navBar;
}

// scroll nav trasparent
export function scrollNav() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
  });
}
