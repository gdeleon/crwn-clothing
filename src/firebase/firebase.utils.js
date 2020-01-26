import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAqF9cEtwVV35ON9jbqBkG19Wof-eF6l7A",
        authDomain: "crwn-db-ccfd7.firebaseapp.com",
        databaseURL: "https://crwn-db-ccfd7.firebaseio.com",
        projectId: "crwn-db-ccfd7",
        storageBucket: "crwn-db-ccfd7.appspot.com",
        messagingSenderId: "359579210982",
        appId: "1:359579210982:web:b7e5984463d6cebf235727",
        measurementId: "G-44R5L3ZN33"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// Trigger Google Account picker during sign in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;