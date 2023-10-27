const firebaseConfig = {
    apiKey: "AIzaSyDkIw-MiE9VB9VaJ2EMNYV6ukM8gvw0UWY",
    authDomain: "hookey-2beee.firebaseapp.com",
    databaseURL: "https://hookey-2beee-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hookey-2beee",
    storageBucket: "hookey-2beee.appspot.com",
    messagingSenderId: "873667938609",
    appId: "1:873667938609:web:3f7cf35ad219ea8d018810"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);