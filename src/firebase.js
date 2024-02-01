// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWiVgbGhvNH8HE-2RWdiv-P5cC8-VPAg",
  authDomain: "whats-app-1729.firebaseapp.com",
  projectId: "whats-app-1729",
  storageBucket: "whats-app-1729.appspot.com",
  messagingSenderId: "668656504301",
  appId: "1:668656504301:web:b9c33958d534a44b4bebe4",
  measurementId: "G-7WGVG0KVFW",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getDatabase(firebaseApp);
const auth = getAuth();
const storage = getFirestore(firebaseApp);

export { auth, provider, storage };
export default db;
