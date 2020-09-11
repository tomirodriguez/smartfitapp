import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAbxr7tiFQ0IHF6iuB2uAYBpRYm2VJMXuQ",
    authDomain: "smart-fit-app.firebaseapp.com",
    databaseURL: "https://smart-fit-app.firebaseio.com",
    projectId: "smart-fit-app",
    storageBucket: "smart-fit-app.appspot.com",
    messagingSenderId: "10757053827",
    appId: "1:10757053827:web:5a91cf7ade97ec65116ab6",
    measurementId: "G-B0KZKMLTV7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const authenticator = firebase.auth();

export default authenticator;