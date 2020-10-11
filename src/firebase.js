import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzZftcJSxFT4GB1rlRep3WC88Oy7cLXCU",
    authDomain: "chatty-87c41.firebaseapp.com",
    databaseURL: "https://chatty-87c41.firebaseio.com",
    projectId: "chatty-87c41",
    storageBucket: "chatty-87c41.appspot.com",
    messagingSenderId: "331453967507",
    appId: "1:331453967507:web:c31f555d505515dad5f166",
    measurementId: "G-BKCD6T3LQ2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export { auth, provider };
  export default db;