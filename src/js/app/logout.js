import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { alertMessage } from '../components/alertMessage';

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
  await signOut(auth);
  alertMessage('Sesión cerrada correctamente');
  setTimeout(() => {
    window.location.href = '/index.html';
  }, 2000);
});
