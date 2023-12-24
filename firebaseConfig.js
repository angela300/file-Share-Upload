// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGSc7lv7drZDsjsHzAcwTw6uKbspk06rU",
  authDomain: "newp-aaf8f.firebaseapp.com",
  projectId: "newp-aaf8f",
  storageBucket: "newp-aaf8f.appspot.com",
  messagingSenderId: "1012061038610",
  appId: "1:1012061038610:web:6b47341c1dedf09e8a90cb",
  measurementId: "G-12GV36X9NS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
