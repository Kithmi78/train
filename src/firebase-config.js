// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOsm1-3xlHZ0-KTtS81NDC9C8YfGwUfjk",
  authDomain: "train-3de40.firebaseapp.com",
  projectId: "train-3de40",
  storageBucket: "train-3de40.appspot.com",
  messagingSenderId: "47282198008",
  appId: "1:47282198008:web:f8101b59b818cfee89720d",
  measurementId: "G-2BWS1GBNVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);