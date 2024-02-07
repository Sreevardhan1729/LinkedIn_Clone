// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcMK6_Fst_oOfv5SJ1NAyzCjyyVZJcNvg",
  authDomain: "linkedin-clone-77.firebaseapp.com",
  projectId: "linkedin-clone-77",
  storageBucket: "linkedin-clone-77.appspot.com",
  messagingSenderId: "34281069379",
  appId: "1:34281069379:web:e2ed34085918f526656df6",
  measurementId: "G-NBEEFMVEZY",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
