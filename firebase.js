// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoolgeAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa6pTt5_CkUXaXH0h-U5qZe-yDDJxDKMY",
  authDomain: "uber-next-clone-live-4be25.firebaseapp.com",
  projectId: "uber-next-clone-live-4be25",
  storageBucket: "uber-next-clone-live-4be25.appspot.com",
  messagingSenderId: "616802951745",
  appId: "1:616802951745:web:8168516f15942b17015cc0",
  measurementId: "G-SZEZ1ZRLND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
