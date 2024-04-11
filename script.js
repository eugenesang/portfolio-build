import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDP8EPzCgM-qE41AgarRM7hNy3Gt8jgCVU",
    authDomain: "eugene-sang.firebaseapp.com",
    projectId: "eugene-sang",
    storageBucket: "eugene-sang.appspot.com",
    messagingSenderId: "681034223555",
    appId: "1:681034223555:web:d8ef10b22cb5b381adb776",
    measurementId: "G-WSRJTCWEFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);