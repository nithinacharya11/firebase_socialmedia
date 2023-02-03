// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWTJv6WHxZl9gbXNYaRwTWIC_7318rHag",
  authDomain: "fir-socialmedia-fe39f.firebaseapp.com",
  projectId: "fir-socialmedia-fe39f",
  storageBucket: "fir-socialmedia-fe39f.appspot.com",
  messagingSenderId: "166649446834",
  appId: "1:166649446834:web:833a976dc1f4e83826e4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);