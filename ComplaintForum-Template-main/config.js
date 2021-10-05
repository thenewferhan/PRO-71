import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyA7nObtrH3iyUyc9Ddh8pjlic6pH6MTG5g",
  authDomain: "complaintform-43c45.firebaseapp.com",
  projectId: "complaintform-43c45",
  storageBucket: "complaintform-43c45.appspot.com",
  messagingSenderId: "929955901799",
  appId: "1:929955901799:web:3978177a44e915874affc2"
};
firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()

