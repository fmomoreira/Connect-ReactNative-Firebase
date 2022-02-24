import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


//===============  Informar as credencias geradas pelo firebase ===========================
const firebaseConfig = {
  apiKey:"***************",
  authDomain: "********************",
  projectId: "******",
  storageBucket: "*******",
  messagingSenderId: "*****",
  appId: "**********"
};
//====================================== =========================== ======================


firebase.initializeApp(firebaseConfig);

export default firebase