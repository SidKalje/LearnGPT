// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBucnAkwq-gcscqy0B8pITLuasdszTQI8I",
  authDomain: "learngpt-52e9c.firebaseapp.com",
  projectId: "learngpt-52e9c",
  storageBucket: "learngpt-52e9c.appspot.com",
  messagingSenderId: "1092609316365",
  appId: "1:1092609316365:web:d3a8cae8e318fa78212744",
  measurementId: "G-FFBDYYTG15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// setPersistence(auth, browserLocalPersistence);
const analytics = getAnalytics(app);
