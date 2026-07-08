import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.ts";

export interface User {
  email: string;
  password: string;
}

export async function createUser(user: User) {
  const docRef = await addDoc(collection(db, "users"), user);

  return docRef.id;
}

export async function getUsers() {
  const snapshot = await getDocs(collection(db, "users"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getUser(id: string) {
  const snapshot = await getDoc(doc(db, "users", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export async function updateUser(id: string, updates: Partial<User>) {
  await updateDoc(doc(db, "users", id), updates);
}

export async function deleteUser(id: string) {
  await deleteDoc(doc(db, "users", id));
}
