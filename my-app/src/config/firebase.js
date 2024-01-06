// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG0dRI5uXucQBWdaNb6DGCEA_OYPEoqfA",
  authDomain: "realtime-chat-app-4472d.firebaseapp.com",
  projectId: "realtime-chat-app-4472d",
  storageBucket: "realtime-chat-app-4472d.appspot.com",
  messagingSenderId: "134616881486",
  appId: "1:134616881486:web:535ee817e5b192eb8b661f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
