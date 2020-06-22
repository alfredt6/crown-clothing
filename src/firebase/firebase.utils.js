import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBj8PS-N2KIFjCBx6yUSn8ucAr_hBZbHXY",
    authDomain: "crown-db-3b61f.firebaseapp.com",
    databaseURL: "https://crown-db-3b61f.firebaseio.com",
    projectId: "crown-db-3b61f",
    storageBucket: "crown-db-3b61f.appspot.com",
    messagingSenderId: "494006779973",
    appId: "1:494006779973:web:9e71000d4585aca206232c"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();    

    //console.log(snapShot);
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt =  new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
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