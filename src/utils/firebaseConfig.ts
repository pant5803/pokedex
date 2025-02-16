import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIYheYDmODt1uUsnSYWC9yOfePNpwqGo0",
  authDomain: "pokedex-5803.firebaseapp.com",
  projectId: "pokedex-5803",
  storageBucket: "pokedex-5803.firebasestorage.app",
  messagingSenderId: "37424699960",
  appId: "1:37424699960:web:dd8cc4c7463e2c4f6324cd"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
