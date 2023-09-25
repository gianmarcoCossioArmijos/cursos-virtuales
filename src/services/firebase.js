import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyCDOJidAWi01rxbYsnruGyUQsNCWw7lw",
  authDomain: "gianmarco-cursos-virtuales.firebaseapp.com",
  projectId: "gianmarco-cursos-virtuales",
  storageBucket: "gianmarco-cursos-virtuales.appspot.com",
  messagingSenderId: "359520477279",
  appId: "1:359520477279:web:91d7cd6a37c4bc5755bbea",
  measurementId: "G-S9XH2NGW0N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);