import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDJntbnmzqf7DsXcn9qt4q7qW3GSS2dpG4",
    authDomain: "trend-atire.firebaseapp.com",
    databaseURL: "https://trend-atire.firebaseio.com",
    projectId: "trend-atire",
    storageBucket: "trend-atire.appspot.com",
    messagingSenderId: "779377554270",
    appId: "1:779377554270:web:876d326a61dc62e10795cf",
    measurementId: "G-38NMWWL5MM"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// For google Authentication Only
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' }); // Always show pop-up to select google account
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase; // if we need it in any place in application