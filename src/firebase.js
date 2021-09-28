import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmst4MwnpwUVFNmh21tQhYzMUWRN9_TQI",
  authDomain: "tik-tok-clone-92092.firebaseapp.com",
  projectId: "tik-tok-clone-92092",
  storageBucket: "tik-tok-clone-92092.appspot.com",
  messagingSenderId: "237134428568",
  appId: "1:237134428568:web:3534d0ef8ee42ca84b93ed",
});

const db = firebaseApp.firestore();

export default db;
