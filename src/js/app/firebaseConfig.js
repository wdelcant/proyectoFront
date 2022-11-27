// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,

  apiKey: 'AIzaSyCPXxi23ryVz7HsDITVM62asoi6Evln2eo',
  authDomain: 'proyectofrontcf.firebaseapp.com',
  projectId: 'proyectofrontcf',
  storageBucket: 'proyectofrontcf.appspot.com',
  messagingSenderId: '744694907727',
  appId: '1:744694907727:web:6da9ac62110279391fbb3a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
