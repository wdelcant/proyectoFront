// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: `${process.env.VITE_APP_API_KEY}`,
  // authDomain: `${process.env.VITE_APP_AUTH_DOMAIN}`,
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
