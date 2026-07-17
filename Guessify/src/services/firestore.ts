import {
  setDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.ts";

export interface UserData {
  uid: string;
  name: string;
  email: string;
  nGames: number;
  wins: number;
  winStreak: number;
}

export async function createUser(user: UserData) {
  await setDoc(doc(db, "users", user.uid), {
    name: user.name,
    email: user.email,
    nGames: user.nGames,
    wins: user.wins,
    winStreak: user.winStreak,
  });
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

export async function updateUser(id: string, updates: Partial<UserData>) {
  await updateDoc(doc(db, "users", id), updates);
}

export async function deleteUser(id: string) {
  await deleteDoc(doc(db, "users", id));
}
