import { auth } from './firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { alertMessage } from '../components/alertMessage';

const resetPasswordForm = document.querySelector('#reset-password-form');

resetPasswordForm.addEventListener('submit', async e => {
  e.preventDefault();

  const email = resetPasswordForm['reset-password-email'].value;

  try {
    await sendPasswordResetEmail(auth, email);
    alertMessage('Revisa tu correo para restablecer tu contraseña', 'success');
    // cierra el modal
    document.querySelector('.popup-reset-password').classList.remove('active');
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      alertMessage('El correo no es valido', 'error');
    } else if (error.code === 'auth/user-not-found') {
      alertMessage('El usuario no existe', 'error');
    } else if (error.code) {
      alertMessage('Error desconocido', 'error');
    }
  }
});
