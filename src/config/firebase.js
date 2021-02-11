import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAWeISR7qzPo-K-ALag-mKQifM_wrro-cE",
    authDomain: "test-task-junior.firebaseapp.com",
    databaseURL: "https://test-task-junior-default-rtdb.firebaseio.com",
    projectId: "test-task-junior",
    storageBucket: "test-task-junior.appspot.com",
    messagingSenderId: "838182821050",
    appId: "1:838182821050:web:a56b3d7eb2bc8f87e1f683"
});


export default app;
