import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMEYEEbegp21HuzLA0tCRN0oaRTsJ9kPs",
    authDomain: "blog-on-cb71d.firebaseapp.com",
    databaseURL: "https://blog-on-cb71d.firebaseio.com",
    projectId: "blog-on-cb71d",
    storageBucket: "blog-on-cb71d.appspot.com",
    messagingSenderId: "109176410549",
    appId: "1:109176410549:web:e3771297db34ebb2db89fc"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default} 