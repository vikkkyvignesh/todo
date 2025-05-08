import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA4nfvCCUkFvA0wM7KX49fx5oxhDLFMDg",
  authDomain: "todo-app-c1264.firebaseapp.com",
  projectId: "todo-app-c1264",
  storageBucket: "todo-app-c1264.appspot.com",
  messagingSenderId: "54697558809",
  appId: "1:54697558809:web:fdeb5a162c546b1d507b88",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
