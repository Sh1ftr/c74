import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCK8yhzMH8PPrLksGbf59HEXGyirEjS1Kw",
  authDomain: "wily-app-85323.firebaseapp.com",
  projectId: "wily-app-85323",
  storageBucket: "wily-app-85323.appspot.com",
  messagingSenderId: "1017955388426",
  appId: "1:1017955388426:web:3dd680798ee1e6978ea3f3"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
export default firebase.firestore();