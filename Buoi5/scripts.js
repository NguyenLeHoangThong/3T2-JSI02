// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js"; // CDN
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"; // CDN
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRfdLvsDwoSm83YF9OTmk3mb4OHrAFDCM",
  authDomain: "jsi01-ea7a0.firebaseapp.com",
  projectId: "jsi01-ea7a0",
  storageBucket: "jsi01-ea7a0.appspot.com",
  messagingSenderId: "269320197",
  appId: "1:269320197:web:a855a4872e7406845f1c6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // doi tuong dac biet

document.getElementById("submit").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // createUserWithEmailAndPassword(auth, username, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log("user", user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log("error", error)
  //     // ..
  //   });

  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage);
    });
});


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log("user", user)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("signed out")
  }
});
