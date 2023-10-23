import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    apiKey: "AIzaSyBXKpNaYvkRBERJg4MUkFt0It6FxgODnmU",
    authDomain: "blog-code-along-2031d.firebaseapp.com",
    projectId: "blog-code-along-2031d",
    storageBucket: "blog-code-along-2031d.appspot.com",
    messagingSenderId: "424613358305",
    appId: "1:424613358305:web:281ce7ae7b41249b8925a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
