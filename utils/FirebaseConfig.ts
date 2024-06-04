import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1_sT6tI_-F1p7v9SwXEtcl483dpdNhas",
    authDomain: "socialapp-8b058.firebaseapp.com",
    projectId: "socialapp-8b058",
    storageBucket: "socialapp-8b058.appspot.com",
    messagingSenderId: "303815638241",
    appId: "1:303815638241:web:f87780f3113e6ee5700ba0"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
export const FIREBASE_DB = getFirestore(FIREBASE_APP);   