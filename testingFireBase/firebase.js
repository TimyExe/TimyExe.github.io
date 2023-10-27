// let isregister=false;
// register = document.getElementById("register");

// register.addEventListener("click",redirectToRegisterPage)
// function redirectToRegisterPage() {
//     window.location.href = 'register.html'; // Redirect to the registration page
// }

// //Update the below URL with the appropriate version if necessary.
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut
//     //Update the below URL with the appropriate version if necessary.
// } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


// // INSERT YOUR FIREBASE CONFIG OBJECT HERE

// const firebaseConfig = {
//     apiKey: "AIzaSyCB7hQiPxx9vu_Hn8rrjP6zNsoFoqjJQVs",
//     authDomain: "tojiiii.firebaseapp.com",
//     projectId: "tojiiii",
//     storageBucket: "tojiiii.appspot.com",
//     messagingSenderId: "394667194340",
//     appId: "1:394667194340:web:e24aa2583dbacd0b3ab9f1",
//     measurementId: "G-8X9LKER2XZ"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const userEmail = document.querySelector("#email");
// const userPassword = document.querySelector("#password");
// // register down

// const signupEmail = document.querySelector("#singUpEmail");
// const signuppassword = document.querySelector("#signUpPassword");

// const signUpBtn = document.querySelector("#signup")

// secretContent.style.display = 'none';

// const userSignUp = async () => {
//     const signUpEmail = signupEmail.value;
//     const signUpPassword = signuppassword.value;
//     createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             alert("Your account has been created!");
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode + errorMessage)
//         })
// }

// const userSignIn = async () => {
//     const signInEmail = userEmail.value;
//     const signInPassword = userPassword.value;
//     signInWithEmailAndPassword(auth, signInEmail, signInPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("You have signed in successfully!");
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode + errorMessage)
//         })
// }

// const checkAuthState = async () => {
//     onAuthStateChanged(auth, user => {
//         if (user) {
//             authForm.style.display = 'none';
//             secretContent.style.display = 'block';
//         }
//         else {
//             authForm.style.display = 'block';
//             secretContent.style.display = 'none';
//         }
//     })
// }

// const userSignOut = async () => {
//     await signOut(auth);
// }

// checkAuthState();

// signUpBtn.addEventListener('click', userSignUp);
// signInButton.addEventListener('click', userSignIn);
// signOutButton.addEventListener('click', userSignOut);