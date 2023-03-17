// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0WY5bGtVCWTKbYxhOxtG84yBog1TjOxY",
  authDomain: "netflix-clone-ughieoza.firebaseapp.com",
  projectId: "netflix-clone-ughieoza",
  storageBucket: "netflix-clone-ughieoza.appspot.com",
  messagingSenderId: "1045864497817",
  appId: "1:1045864497817:web:39f38ef6b6dc6ae3e0ae08",
  measurementId: "G-YDP0DH1C27"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
