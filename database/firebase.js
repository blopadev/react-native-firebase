import firebase from "firebase";

import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDdR3YLUgqyMt0kWY3ULHCTBgcOmlUkzS0",
  authDomain: "react-native-firebase-bd3ed.firebaseapp.com",
  projectId: "react-native-firebase-bd3ed",
  storageBucket: "react-native-firebase-bd3ed.appspot.com",
  messagingSenderId: "516808284795",
  appId: "1:516808284795:web:1ca612c9ed1eac7c51e0de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
  firebase, 
  db
}