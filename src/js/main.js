// firebase
import { auth } from './app/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { loginCheck } from './app/loginCheck';

import './app/signupForm';
import './app/signinForm';
import './app/googleLogin';
import './app/logout';

onAuthStateChanged(auth, async user => {
  if (user) {
    loginCheck(user);
  } else {
    loginCheck(user);
  }
});

// componentes
import { loader } from './components/loader';
import { navBar, scrollNav } from './components/navBar';
import { waveEffect, btnEffect } from './components/scrollEffect';
import { slider } from './components/slider';
import { moveDown } from './components/moveDown';
import { modal, modalRegister } from './components/modal';

// Se importan los estilos
import '../scss/main.scss';

// API de contacto
import './api/contactForm';

// llamado a las funciones
loader();
navBar();
modal();
modalRegister();
scrollNav();
waveEffect();
btnEffect();
slider();
moveDown();
