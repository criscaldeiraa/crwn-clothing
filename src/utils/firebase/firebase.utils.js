import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa3gWc2gRl8fvO9RWnmHj1IX3_wkmwr8s",
    authDomain: "ec-crwn-clothing-db.firebaseapp.com",
    projectId: "ec-crwn-clothing-db",
    storageBucket: "ec-crwn-clothing-db.appspot.com",
    messagingSenderId: "1057664760104",
    appId: "1:1057664760104:web:c29820e56852be7052381d"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    //if user data does not exists
    //create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                 
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    //if user data exists
    //return userDocRef
    return userDocRef;
}