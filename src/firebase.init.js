import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG8lPN5EAE9-GEvL9WEY50aC3WwmYrxl4",
    authDomain: "e-commerce-web-ejp.firebaseapp.com",
    projectId: "e-commerce-web-ejp",
    storageBucket: "e-commerce-web-ejp.firebasestorage.app",
    messagingSenderId: "1055668822164",
    appId: "1:1055668822164:web:e5120a801b3c7f557c9481"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)