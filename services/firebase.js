// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREABASE_SENDER_ID,
  appId: process.env.FIREABASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);