import { auth } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { alertMessage } from '../components/alertMessage';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async e => {
  e.preventDefault();

  // valida inputs
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const passwordTwo = signupForm['signup-passwordTwo'].value;
  const phone = signupForm['signup-phone'].value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Registro de usuarios
  try {
    if (password !== passwordTwo) {
      alertMessage('Las contraseñas no coinciden', 'error');
    } else if (phone === '') {
      alertMessage('El teléfono es obligatorio', 'error');
    } else if (phone < 9) {
      alertMessage('El teléfono debe tener 9 dígitos', 'error');
    } else if (!emailRegex.test(email)) {
      alertMessage('El correo no es valido', 'error');
    } else {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        phone,
        password,
        passwordTwo
      );
      await sendEmailVerification(userCredentials.user);
      alertMessage('Verifica tu correo', 'success');
      signupForm.reset();

      document.querySelector('.popup-register').classList.remove('active');
      alertMessage(`Bienvenido ${userCredentials.user.email}`, 'success');
    }
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
