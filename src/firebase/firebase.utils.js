import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD1vEiCLmgRG2SweOmUNusnrdqNdXPQkAs",
  authDomain: "crwn-db-4c966.firebaseapp.com",
  databaseURL: "https://crwn-db-4c966.firebaseio.com",
  projectId: "crwn-db-4c966",
  storageBucket: "crwn-db-4c966.appspot.com",
  messagingSenderId: "473873075033",
  appId: "1:473873075033:web:7525f155bb1c6626c15a48",
  measurementId: "G-TKS3KBFG6S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;