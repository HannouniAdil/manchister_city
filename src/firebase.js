import firebase from 'firebase/app';
import 'firebase/app' ;
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAkjhqIu58F7Y6lWosMlZr0Qee2uk96L2k",
  authDomain: "manchester-city-3f9d4.firebaseapp.com",
  databaseURL: "https://manchester-city-3f9d4-default-rtdb.firebaseio.com",
  projectId: "manchester-city-3f9d4",
  storageBucket: "manchester-city-3f9d4.appspot.com",
  messagingSenderId: "345101643920",
  appId: "1:345101643920:web:8e8fea308c8f0419696815",
  measurementId: "G-TR8FKV6WPX"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
export{
  firebase,
  firebaseMatches
}