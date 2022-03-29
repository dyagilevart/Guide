import firebase from 'firebase/app';
import 'firebase/firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkp2bG0n0w1VzMuYA79VWoF1DkcQKCvKI",
    authDomain: "all-car-logos.firebaseapp.com",
    projectId: "all-car-logos",
    storageBucket: "all-car-logos.appspot.com",
    messagingSenderId: "283730818569",
    appId: "1:283730818569:web:83fdbba9d927ed0f566ad8",
    measurementId: "G-YZTLMV7LWD"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;