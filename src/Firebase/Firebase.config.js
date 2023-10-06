// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "react-dragon-news-auth-abc0d.firebaseapp.com",
  apiKey: "AIzaSyCfTZF8WnkouaUrGDQ1iieFnL1CWoARAjc",
  projectId: "react-dragon-news-auth-abc0d",
  storageBucket: "react-dragon-news-auth-abc0d.appspot.com",
  messagingSenderId: "601328798675",
  appId: "1:601328798675:web:126c066b457a458424fd26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app