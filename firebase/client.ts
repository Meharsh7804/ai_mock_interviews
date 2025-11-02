// Import the functions you need from the SDKs you need
import { getApps, initializeApp, cert } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKasHOWW7x6NK-TmpJIHSwXLzTFXD8V-0",
  authDomain: "nexhire2.firebaseapp.com",
  projectId: "nexhire2",
  storageBucket: "nexhire2.firebasestorage.app",
  messagingSenderId: "563100711569",
  appId: "1:563100711569:web:21550f9b6fed83c37c5d30",
  measurementId: "G-G31H2TN1L7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
