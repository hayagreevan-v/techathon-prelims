
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjToIub_kOd6334ksEabRIUiN_UtPXtTw",
  authDomain: "fir-7d9ee.firebaseapp.com",
  projectId: "fir-7d9ee",
  storageBucket: "fir-7d9ee.appspot.com",
  messagingSenderId: "493771331329",
  appId: "1:493771331329:web:bfc2182cd7cc18ef40ed00",
  measurementId: "G-8B04P7MD0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =  getAuth(app);


  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    createUserWithEmailAndPassword(auth,email.value,password.value).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    //
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    signInWithEmailAndPassword(auth,email.value,password.value).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
    //promise.catch(e=>alert(e.message));
    
  }


  //signOut

 
  //active user to homepage
  onAuthStateChanged(auth, (user) =>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })