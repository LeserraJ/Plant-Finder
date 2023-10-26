// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwF9wMCJZ0-N6VzYKrqPSMb-YpiO_OsJw",
  authDomain: "plant-finder-e2d75.firebaseapp.com",
  projectId: "plant-finder-e2d75",
  storageBucket: "plant-finder-e2d75.appspot.com",
  messagingSenderId: "198704412280",
  appId: "1:198704412280:web:9ff67bc3a72603fb5adf8d",
  measurementId: "G-1Z6Q9CLW6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);