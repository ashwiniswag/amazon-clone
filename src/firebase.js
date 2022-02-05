import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNbqdpVYd10aGKAjUW_rAkrlONH3Xs5HU",
  authDomain: "clone-ac7be.firebaseapp.com",
  projectId: "clone-ac7be",
  storageBucket: "clone-ac7be.appspot.com",
  messagingSenderId: "1085166946412",
  appId: "1:1085166946412:web:dbb8c50578b4a05daf3049",
  measurementId: "G-BVE034RN74"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const db =getFirestore();
// const auth = firebase.auth();

export {db, auth};