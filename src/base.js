import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD53scC8DSQ0XCsNUQfYyPhM082m1OV9xM",
    authDomain: "catch-of-the-day-54a3b.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-54a3b.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
