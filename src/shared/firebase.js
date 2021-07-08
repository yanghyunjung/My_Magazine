import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJ-_jbl0SedwqgZ5DETukZiRWlYngLLhc",
  authDomain: "my-page-e3992.firebaseapp.com",
  projectId: "my-page-e3992",
  storageBucket: "my-page-e3992.appspot.com",
  messagingSenderId: "988201240347",
  appId: "1:988201240347:web:577a65886d5a48721775be",
  measurementId: "G-58DP6H8T11",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();


export{auth, apiKey, firestore, storage, realtime};