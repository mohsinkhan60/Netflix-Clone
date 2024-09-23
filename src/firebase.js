import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkLTnXPB8gogiVoyW8SVbFfnu1yirqhNc",
  authDomain: "netlify-clone-405f3.firebaseapp.com",
  projectId: "netlify-clone-405f3",
  storageBucket: "netlify-clone-405f3.appspot.com",
  messagingSenderId: "76139366074",
  appId: "1:76139366074:web:18f27d83d6249df362e483",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful");
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Login failed: " + error.message); // Use error.message for clarity
  }
};

export const logout = () => {
  signOut(auth);
};
export default { auth, db, signup, login, logout };
