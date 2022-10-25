// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVHV6kUYGzhrf4gKwycGLEDzKxGcIk8J8",
    authDomain: "treat-tutorials.firebaseapp.com",
    projectId: "treat-tutorials",
    storageBucket: "treat-tutorials.appspot.com",
    messagingSenderId: "452882012565",
    appId: "1:452882012565:web:2c38b7ac3bb58b0ce73e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;