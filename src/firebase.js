import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCds--CKp_U2bhM6qTKwgYDsXVQK5Tt_jg",
  authDomain: "netflix-project-e3d98.firebaseapp.com",
  projectId: "netflix-project-e3d98",
  storageBucket: "netflix-project-e3d98.appspot.com",
  messagingSenderId: "696602006010",
  appId: "1:696602006010:web:b7cfe7855b996550045443",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};

export default db;
