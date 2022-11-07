import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBbsxfX23_poikswphyI95hm6h8Rjq4BoI",
  authDomain: "slack-clone-ca81c.firebaseapp.com",
  databaseURL: "https://slack-clone-ca81c-default-rtdb.firebaseio.com",
  projectId: "slack-clone-ca81c",
  storageBucket: "slack-clone-ca81c.appspot.com",
  messagingSenderId: "752528550512",
  appId: "1:752528550512:web:eec215391f5ff6dfa3a2b5",
  measurementId: "G-W2MHDVYNYD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
