// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-JlOiKfMMgZAkoNuTttennHda9z-oCVw",
  authDomain: "the-flashback.firebaseapp.com",
  projectId: "the-flashback",
  storageBucket: "the-flashback.firebasestorage.app",
  messagingSenderId: "617798685032",
  appId: "1:617798685032:web:b83356a3ac6049f93d46dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);