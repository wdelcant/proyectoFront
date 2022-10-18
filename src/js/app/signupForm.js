import { auth } from './firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { alertMessage } from '../components/alertMessage.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async e => {
  e.preventDefault();

  // valida inputs
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // Registro de usuarios
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    alertMessage('Bienvenido' + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alertMessage('El correo ya esta en uso', 'error');
    } else if (error.code === 'auth/invalid-email') {
      alertMessage('El correo no es valido', 'error');
    } else if (error.code === 'auth/weak-password') {
      alertMessage('La contraseña debe tener al menos 6 caracteres', 'error');
    } else if (error.code === 'auth/operation-not-allowed') {
      alertMessage('El registro de usuarios esta deshabilitado', 'error');
    } else if (error.code) {
      alertMessage('Error desconocido', 'error');
    }
  }
});
