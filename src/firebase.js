import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIB01JHOVd7SstsLtdh3EblVDqb1mO58I",
  authDomain: "facebook-clone-pro.firebaseapp.com",
  projectId: "facebook-clone-pro",
  storageBucket: "facebook-clone-pro.appspot.com",
  messagingSenderId: "838145717283",
  appId: "1:838145717283:web:c77b646facfe75fded2d96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // access to db functionalty
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //google login server

export { auth, provider };
export default db;
