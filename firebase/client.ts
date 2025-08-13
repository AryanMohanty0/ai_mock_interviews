import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoonfnt_rOSQgCrutI2FnkFXpVIgvUBco",
  authDomain: "echodrill-f60b3.firebaseapp.com",
  projectId: "echodrill-f60b3",
  storageBucket: "echodrill-f60b3.firebasestorage.app",
  messagingSenderId: "890284155388",
  appId: "1:890284155388:web:8c668930456aef07485279",
  measurementId: "G-KF2R7S1H7Q"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app)