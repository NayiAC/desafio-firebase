// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6VJBMiyXmPGFv8en0x22e_C6DrqersJ8',
  authDomain: 'fir-desafio-ae98a.firebaseapp.com',
  projectId: 'fir-desafio-ae98a',
  storageBucket: 'fir-desafio-ae98a.appspot.com',
  messagingSenderId: '646896539734',
  appId: '1:646896539734:web:9ba5520b9e32548ab543f7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)
export { $db }
