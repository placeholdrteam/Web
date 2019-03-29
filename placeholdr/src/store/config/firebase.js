import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCqfOWaZxxEdCaNrOhGXQ5uS-OOwb_C4pY",
  authDomain: "placeholdr-app.firebaseapp.com",
  databaseURL: "https://placeholdr-app.firebaseio.com",
  projectId: "placeholdr-app",
  storageBucket: "placeholdr-app.appspot.com",
  messagingSenderId: "726276989394"
};

firebase.initializeApp(config);

export default firebase