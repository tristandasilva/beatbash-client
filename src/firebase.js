// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import env from 'react-dotenv';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHc1ug5a9wIBGVzZEO7_yRe84nPnmWjlY',
  authDomain: 'beatbash-67afc.firebaseapp.com"',
  projectId: 'beatbash-67afc',
  storageBucket: 'beatbash-67afc.appspot.com',
  messagingSenderId: '308710011506',
  appId: '1:308710011506:web:84f27e53ac6f7c1d2148eb',
  measurementId: 'G-7R50G9QJPN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
