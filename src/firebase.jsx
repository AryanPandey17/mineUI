// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg2pdkpM8NRJ226_BbhsJtmrcs6hRmetg",
  authDomain: "miniui-e2607.firebaseapp.com",
  projectId: "miniui-e2607",
  storageBucket: "miniui-e2607.firebasestorage.app",
  messagingSenderId: "209078671864",
  appId: "1:209078671864:web:588bed1bd7e74778129e0d",
  measurementId: "G-WFJ87MXZF0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


