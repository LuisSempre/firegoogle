// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEl3FGTmh3VO2QHZRtj6Z52eV6H2JhAUA",
  authDomain: "auth-c1fe0.firebaseapp.com",
  projectId: "auth-c1fe0",
  storageBucket: "auth-c1fe0.appspot.com",
  messagingSenderId: "361205357730",
  appId: "1:361205357730:web:623bfbf75f5f093cbecbfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
