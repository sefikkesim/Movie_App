import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoznJb9jaRg3carhzJuRaD0X_kstgMNb0",
  authDomain: "movie-app-b3f0f.firebaseapp.com",
  projectId: "movie-app-b3f0f",
  storageBucket: "movie-app-b3f0f.appspot.com",
  messagingSenderId: "453149946445",
  appId: "1:453149946445:web:b72ff9c7180626bd18a204",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
