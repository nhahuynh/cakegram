import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFowi2w3hqoyt5TZ5Fy7tfr93hW24Wcw",
  authDomain: "cakegram-ce4db.firebaseapp.com",
  projectId: "cakegram-ce4db",
  storageBucket: "cakegram-ce4db.appspot.com",
  messagingSenderId: "974227731223",
  appId: "1:974227731223:web:be1e87a45953c6196c7d52",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
