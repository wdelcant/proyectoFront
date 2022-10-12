// Se importan los módulos necesarios
import { loader } from './components/loader.js';
import { navBar, scrollNav } from './components/navBar.js';
import { scrollEffect } from './components/scrollEffect.js';

import { carousel } from './components/carousel.js';
// Se importan los estilos
import '../scss/main.scss';

// llamado a las funciones
loader();
scrollNav();
navBar();
scrollEffect();
carousel();
