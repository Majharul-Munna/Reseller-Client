// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0k80cRGxqm88BS7Pcc-Fug2XOoite0A",
  authDomain: "re-seller.firebaseapp.com",
  projectId: "re-seller",
  storageBucket: "re-seller.appspot.com",
  messagingSenderId: "789103775462",
  appId: "1:789103775462:web:c84a6e66d075cf9ac4f527",
  measurementId: "G-X0M93T5193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;