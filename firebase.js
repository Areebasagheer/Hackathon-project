  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyAWFmETz0YY69FmFdSmz2EtqBgV0SRV3A0",
    authDomain: "hackathon-project-69305.firebaseapp.com",
    projectId: "hackathon-project-69305",
    storageBucket: "hackathon-project-69305.firebasestorage.app",
    messagingSenderId: "173837294768",
    appId: "1:173837294768:web:ebb2b41fbfd34b1c60af75",
    measurementId: "G-DG33MXJ0HR"
  };

  
  const app = initializeApp(firebaseConfig);

  export{getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword}
