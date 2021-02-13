import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDEYdXOUFxfFfjnE7xodt6z2anNzDa3H-I',
  authDomain: 'mindful-minutes-4c22c.firebaseapp.com',
  databaseURL: 'https://mindful-minutes-4c22c.firebaseio.com',
  projectId: 'mindful-minutes-4c22c',
  storageBucket: 'mindful-minutes-4c22c.appspot.com',
  messagingSenderId: '1077456627550',
  appId: '1:1077456627550:web:911b0628a709e6a52d91cf',
  measurementId: 'G-32ZKQF1MKY',
};

const provider = new firebase.auth.GoogleAuthProvider();

export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
