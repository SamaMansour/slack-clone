import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//api key from firebase
var config = {
  apiKey: "AIzaSyDz0giTqiFhvQ--vP5BXQSnHIC0YprSJw4",
  authDomain: "slack-clone-451a8.firebaseapp.com",
  projectId: "slack-clone-451a8",
  storageBucket: "slack-clone-451a8.appspot.com",
  messagingSenderId: "1079682700993",
  appId: "1:1079682700993:web:06e1ce564b270bb7252640",
  measurementId: "G-KVL8X1WH8F",
  databaseURL: "https://slack-clone-451a8-default-rtdb.firebaseio.com/",

};
firebase.initializeApp(config);

export default firebase;
