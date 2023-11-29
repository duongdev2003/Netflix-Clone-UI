// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLUgI-7UIjJanzCnwNQfljAaxds78kV2A",
    authDomain: "react-netflix-clone-62e92.firebaseapp.com",
    projectId: "react-netflix-clone-62e92",
    storageBucket: "react-netflix-clone-62e92.appspot.com",
    messagingSenderId: "151853753354",
    appId: "1:151853753354:web:aef8bf50e12ea3a1986bf3",
    measurementId: "G-75S10RRDNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

