import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

var firebaseConfig = {
  apiKey: "AIzaSyAYH8zlBLaiSKgvUiltdAweUwErU7mdtb0",
  authDomain: "lighthalll2.firebaseapp.com",
  databaseURL: "https://lighthalll2-default-rtdb.firebaseio.com",
  projectId: "lighthalll2",
  storageBucket: "lighthalll2.appspot.com",
  messagingSenderId: "1082065299530",
  appId: "1:1082065299530:web:6f7e7206403ce44cb1deb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const auth = firebase.auth();
const database = firebase.database();
const db = firebase.database();

export { db };