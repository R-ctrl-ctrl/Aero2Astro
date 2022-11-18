// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSR19AM4e9e4_-k8eEuRJO9esaTQiWwjg",
  authDomain: "aero2astro-5377b.firebaseapp.com",
  projectId: "aero2astro-5377b",
  storageBucket: "aero2astro-5377b.appspot.com",
  messagingSenderId: "1025552751606",
  appId: "1:1025552751606:web:f217e74f38c0f2bfe2c5d7",
  measurementId: "G-QDYFH0TR6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {auth,firestore}
