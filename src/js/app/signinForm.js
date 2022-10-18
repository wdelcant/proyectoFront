import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { alertMessage } from '../components/alertMessage';

const singInForm = document.querySelector('#login-form');

singInForm.addEventListener('submit', async e => {
  e.preventDefault();

  const email = singInForm['login-email'].value;
  const password = singInForm['login-password'].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    alertMessage(`Bienvenido nuevamente ${credentials.user.email}`, 'success');

    // cierra el modal
    document.querySelector('.popup-login').classList.remove('active');
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      alertMessage('El correo no es valido', 'error');
    } else if (error.code === 'auth/user-disabled') {
      alertMessage('El usuario esta deshabilitado', 'error');
    } else if (error.code === 'auth/user-not-found') {
      alertMessage('El usuario no existe', 'error');
    } else if (error.code === 'auth/wrong-password') {
      alertMessage('La contraseña es incorrecta', 'error');
    } else if (error.code) {
      alertMessage('Error desconocido', 'error');
    }
  }
});
