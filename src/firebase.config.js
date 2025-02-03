// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkJT90WGdiNwhr-0OvQtOhJulltkhhm84",
  authDomain: "react-firebase-auth-concepts.firebaseapp.com",
  projectId: "react-firebase-auth-concepts",
  storageBucket: "react-firebase-auth-concepts.firebasestorage.app",
  messagingSenderId: "308738041328",
  appId: "1:308738041328:web:398ff33ccee78c081c6935",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
