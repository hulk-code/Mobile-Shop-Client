// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzB_SYp1y7gRPrN0tbFOE1PxJtUiWyEqs",
  authDomain: "phone-shop-d9a3b.firebaseapp.com",
  projectId: "phone-shop-d9a3b",
  storageBucket: "phone-shop-d9a3b.appspot.com",
  messagingSenderId: "342647543422",
  appId: "1:342647543422:web:76b5d9c72a483c7b7d6a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;