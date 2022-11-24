// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVuVgThK462ajkpkP2NSVZ1FmPxsDtO0U",
  authDomain: "final-project-dc02b.firebaseapp.com",
  projectId: "final-project-dc02b",
  storageBucket: "final-project-dc02b.appspot.com",
  messagingSenderId: "408424830116",
  appId: "1:408424830116:web:65ee57ef645b751e3f4231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };