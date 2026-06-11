import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCWfNw8TRba1C1aPBtYZI38M1W6wyU6y-A',
  authDomain: 'chat-yt-2287d.firebaseapp.com',
  projectId: 'chat-yt-2287d',
  storageBucket: 'chat-yt-2287d.firebasestorage.app',
  messagingSenderId: '459739996269',
  appId: '1:459739996269:web:73188fbe33f48697385f64',
  measurementId: 'G-17SFPW3ZWR',
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
