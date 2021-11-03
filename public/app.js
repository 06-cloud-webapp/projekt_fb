
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5nSXwPcJ-XbpoSpBUYA1OT6Y0lG1SbVo",
  authDomain: "webtest2-cc.firebaseapp.com",
  projectId: "webtest2-cc",
  storageBucket: "webtest2-cc.appspot.com",
  messagingSenderId: "811749512012",
  appId: "1:811749512012:web:4c2ec0eee58081802775e9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
console.log(firebase);
const auth = getAuth();
console.log(auth);
const db = getFirestore();
console.log(db);

onAuthStateChanged(auth, user =>{
    if (user != null) {
      console.log("kein user eingeloggt!");
    } else {
        console.log("user eingeloggt!");
    }
});
