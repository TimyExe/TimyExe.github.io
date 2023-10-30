 //Update the below URL with the appropriate version if necessary.

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import {
   getDatabase,
   ref,
   get,
   set,
   child,
   update,
   remove,
 } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

 import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   //Update the below URL with the appropriate version if necessary.
 } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

 // INSERT YOUR FIREBASE CONFIG OBJECT HERE

 const firebaseConfig = {
   apiKey: "AIzaSyAaZ0EFchWAQB0OFQ0lYGSW9ENXlfgDAC4",
   authDomain: "thclassdb-3abc7.firebaseapp.com",
   databaseURL:
     "https://thclassdb-3abc7-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "thclassdb-3abc7",
   storageBucket: "thclassdb-3abc7.appspot.com",
   messagingSenderId: "97406099162",
   appId: "1:97406099162:web:a9111221d517f256b7cfe3",
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getDatabase(app);
 const userEmail = document.querySelector("#email");

 const userPassword = document.querySelector("#password");
 // const authForm = document.querySelector("#authForm");

 const signUpButton = document.querySelector("#sign-up");
 const signInButton = document.querySelector("#sign-in");
 const signOutButton = document.querySelector("#signOutButton");
 const errorMessageDiv = document.getElementById("error-message");

 let currentUser;
 let enterID = Date.now() * Math.floor(Math.random() * 100);

 const userSignUp = (e) => {
   e.preventDefault();
   const signUpEmail = userEmail.value;
   const signUpPassword = userPassword.value;
   createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
     .then((userCredential) => {
       const user = userCredential.user;
       const userforDb = auth.currentUser;
       // Use the 'db' variable for the database reference, not 'database'
       errorMessageDiv.innerHTML = "";
       console.log(user.uid);
       console.log(enterID);

       // Reference to the specific node in your database
       console.log(enterID, "ajajaj");
       set(ref(db, "user/" + enterID), {
         email: signUpEmail,
         role: "demoUser",
         lastLogin: Date.now(),
         Id: enterID,
       }).then(() => {
           alert("Data added successfully");
           GetData(userEmail.value)
           window.location.href = "main/main.html";
         })
         .catch((error) => {
           alert(error);
         });
       console.log(user);
       alert("Your account has been created!");

      
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Display the error message
      errorMessageDiv.innerHTML = errorMessage;
     });
 };

 function GetData(email) {
   const dataRef = ref(db, "user");

   return get(dataRef)
     .then((snapshot) => {
       if (snapshot.exists()) {
         const data = snapshot.val();
         console.log("hello");
         console.log(data);
         for (const key in data) {
           if (data[key].email === email) {
           
            localStorage.setItem("currentUser",JSON.stringify(data[key]) )
          
            
           }
         }
       } else {
         console.log("Data does not exist at this path.");
         return null; // Return null if data doesn't exist
       }
     })
     .catch((error) => {
       console.error("Error getting data:", error);
       return null; // Return null in case of an error
     });
 }

 const userSignIn = async (e) => {
   e.preventDefault();
   const signInEmail = userEmail.value;
   const signInPassword = userPassword.value;
   signInWithEmailAndPassword(auth, signInEmail, signInPassword)
     .then((userCredential) => {
      errorMessageDiv.innerHTML = "";

       const user = userCredential.user;
       alert("You have signed in successfully!");
       window.location.href = "main/main.html";
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Display the error message
      errorMessageDiv.innerHTML = errorMessage;
     });

GetData(userEmail.value);


 };

 const checkAuthState = async () => {
   onAuthStateChanged(auth, (user) => {
     if (user) {
       //   authForm.style.display = "none";
     } else {
       //   authForm.style.display = "block";
     }
   });
 };

 const userSignOut = async () => {
   console.log("signout");
   await signOut(auth);
 };

 checkAuthState();

 signUpButton.addEventListener("click", userSignUp);
 signInButton.addEventListener("click", userSignIn);
 // signOutButton.addEventListener("click", userSignOut);