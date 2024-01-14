// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklp73RFVLi82Q0bKvADr7sF8IvtboWLU",
  authDomain: "sout-4rklmc4.firebaseapp.com",
  projectId: "sout-4rklmc4",
  storageBucket: "sout-4rklmc4.appspot.com",
  messagingSenderId: "663326711427",
  appId: "1:663326711427:web:53b830caf6c36871e6c5b6",
  measurementId: "G-CHFFRLN2E2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_ST = getStorage(FIREBASE_APP);

