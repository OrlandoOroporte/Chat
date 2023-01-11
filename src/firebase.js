// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyDY8gY2rZmwmRIrUbRTp3uT22LakpZeVj4",
  authDomain: "orochat-74708.firebaseapp.com",
  projectId: "orochat-74708",
  storageBucket: "orochat-74708.appspot.com",
  messagingSenderId: "568160435442",
  appId: "1:568160435442:web:f32f39cb2dcf771363a46b",
  measurementId: "G-KWWW7911NG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
