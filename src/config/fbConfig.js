import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAHIk2SlBN1xoyfPYvWJWa4UzMSnkBiGiI",
  authDomain: "todo-app-a6e3e.firebaseapp.com",
  databaseURL: "https://todo-app-a6e3e.firebaseio.com",
  projectId: "todo-app-a6e3e",
  storageBucket: "todo-app-a6e3e.appspot.com",
  messagingSenderId: "64617530569",
  appId: "1:64617530569:web:15280e0d17607cb2e0b918"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase