// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxFyoHD6vj9lL7lYOTBbRZC-IN5xC0lyQ",
  authDomain: "bike-world-97d68.firebaseapp.com",
  projectId: "bike-world-97d68",
  storageBucket: "bike-world-97d68.appspot.com",
  messagingSenderId: "645110709845",
  appId: "1:645110709845:web:93d2a8a35c102beb675edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;