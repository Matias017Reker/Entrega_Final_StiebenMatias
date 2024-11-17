import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8gDMlYKl7F0ahtfQnhRPY2IUxJ6-LI9s",
    authDomain: "replica-store-18b9a.firebaseapp.com",
    projectId: "replica-store-18b9a",
    storageBucket: "replica-store-18b9a.firebasestorage.app",
    messagingSenderId: "163439955739",
    appId: "1:163439955739:web:2d96d56b4ea5633304cdbe"
};

// Inicio_Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db