import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { alertMessage } from '../components/alertMessage';

const googleBtn = document.querySelector('#googleLogin');

googleBtn.addEventListener('click', async () => {
  const googleProvider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, googleProvider);
    alertMessage(
      `Bienvenido ${
        credentials.user.email && credentials.user.displayName
      } a nuestra plataforma`,
      'success'
    );
    // cierra el modal
    document.querySelector('.popup-login').classList.remove('active');
  } catch (error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      alertMessage('Ya existe una cuenta con este correo electrónico', 'error');
    } else if (error.code === 'auth/popup-closed-by-user') {
      alertMessage('No se ha iniciado sesión, cerraste la ventana', 'error');
    } else if (error.code === 'auth/cancelled-popup-request') {
      alertMessage('Demasiados intentos, Solo presiona una vez', 'error');
    } else if (error.code === 'auth/popup-blocked') {
      alertMessage('Bloqueaste la ventana emergente', 'error');
    } else {
      alertMessage(error.message, 'error');
    }
  }
});
