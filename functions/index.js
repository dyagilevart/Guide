// require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhr918NUnm2y3H_lx6DLaMADKrMLvXMD4",
  authDomain: "carlogo-30ae8.firebaseapp.com",
  projectId: "carlogo-30ae8",
  storageBucket: "carlogo-30ae8.appspot.com",
  messagingSenderId: "501230470464",
  appId: "1:501230470464:web:d4162c08fce7e7417ea6a5",
  measurementId: "G-8N6GSRRWXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);