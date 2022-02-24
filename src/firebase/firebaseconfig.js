import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


//===============  Informar as credencias geradas pelo firebase ===========================
const firebaseConfig = {
    apiKey: "AIzaSyDXlb--UBJAWR9vYgStJe_7N3hTS-fCZiA",
    authDomain: "teste-exemplo-connect.firebaseapp.com",
    projectId: "teste-exemplo-connect",
    storageBucket: "teste-exemplo-connect.appspot.com",
    messagingSenderId: "561804055543",
    appId: "1:561804055543:web:66102f2ce1cdb41c7814f2"
  };
//====================================== =========================== ======================


firebase.initializeApp(firebaseConfig);

export default firebase