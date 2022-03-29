// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV5Buk19ix7rmTb5TjRwf0odDKH9-LwFQ',
  authDomain: 'car-brands-930aa.firebaseapp.com',
  projectId: 'car-brands-930aa',
  storageBucket: 'car-brands-930aa.appspot.com',
  messagingSenderId: '1046249483866',
  appId: '1:1046249483866:web:d57f472abcd6579c18f263',
  measurementId: 'G-SNEPEPGEZN',
};

const initFirebase = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
};

export default initFirebase;
