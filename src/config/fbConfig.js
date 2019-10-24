import firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAt9UgY_xvRuQ9vRGMFADyloF7tw2Y3IQo",
    authDomain: "plan-app-9c768.firebaseapp.com",
    databaseURL: "https://plan-app-9c768.firebaseio.com",
    projectId: "plan-app-9c768",
    storageBucket: "plan-app-9c768.appspot.com",
    messagingSenderId: "442742239541",
    appId: "1:442742239541:web:abd4a06967affbbededc7c"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firebase().settings({ timestampsInSnapshots: true });

  export default firebase;