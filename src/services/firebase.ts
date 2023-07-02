import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA4QYKmGpz7KvwlmpGVzjuNbQ-0u2xW6fg",
  authDomain: "auth-e96fc.firebaseapp.com",
  projectId: "auth-e96fc",
  storageBucket: "auth-e96fc.appspot.com",
  messagingSenderId: "578161299728",
  appId: "1:578161299728:web:0171180ed140acc5f05595"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);