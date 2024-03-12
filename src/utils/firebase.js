// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBG7qPL5LJ4FQfkEjKXDOvQ-iygU1vHqZg",
//     authDomain: "doan-2023-quanlydata.firebaseapp.com",
//     databaseURL: "https://doan-2023-quanlydata-default-rtdb.firebaseio.com",
//     projectId: "doan-2023-quanlydata",
//     storageBucket: "doan-2023-quanlydata.appspot.com",
//     messagingSenderId: "578128583856",
//     appId: "1:578128583856:web:1ec33047c01b09149f2f75",
//     measurementId: "G-S5M626NCGD"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDMG3qo0mQo6kYl6ExuQXlxwO7KimYhtWw",
    authDomain: "loveandmerry-103a2.firebaseapp.com",
    projectId: "loveandmerry-103a2",
    storageBucket: "loveandmerry-103a2.appspot.com",
    messagingSenderId: "510713213836",
    appId: "1:510713213836:web:57ed2eefafc683bfd41ca9",
    measurementId: "G-RQXC85VJB1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig)
const DBFirebase = getFirestore(app)

const AuthFirebase = getAuth(app);
const storage = getStorage(app);
export {DBFirebase, storage, AuthFirebase}
