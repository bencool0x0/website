// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS-olFkq9ErCAXMcFvuf6CTcDBAvWmbZU",
  authDomain: "learn-python-433d5.firebaseapp.com",
  databaseURL: "https://learn-python-433d5-default-rtdb.firebaseio.com",
  projectId: "learn-python-433d5",
  storageBucket: "learn-python-433d5.appspot.com",
  messagingSenderId: "908895771939",
  appId: "1:908895771939:web:111b2d1cb9cfbe67888096",
  measurementId: "G-WQ3E46CWHC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
