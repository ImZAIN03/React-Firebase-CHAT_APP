// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCigKkJtl3RWKaeWXboQFnxdiuyrvAHB-E",
  authDomain: "chatapp-f18d2.firebaseapp.com",
  projectId: "chatapp-f18d2",
  storageBucket: "chatapp-f18d2.appspot.com",
  messagingSenderId: "83467457707",
  appId: "1:83467457707:web:7a3692439245cc449fd3ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);