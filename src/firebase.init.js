// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwu_9AzQOZ5q-U9gS5rYXLqpptkVYrCk",
  authDomain: "auth-integration-6cb20.firebaseapp.com",
  projectId: "auth-integration-6cb20",
  storageBucket: "auth-integration-6cb20.firebasestorage.app",
  messagingSenderId: "515116017114",
  appId: "1:515116017114:web:cbd609ddc2579c56780ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);