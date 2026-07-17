import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export async function register(email: string, password: string) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return credential.user;
}

export async function login(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(auth, email, password);

  return credential.user;
}

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);

  return result.user;
}

export async function logout() {
  await signOut(auth);
}
