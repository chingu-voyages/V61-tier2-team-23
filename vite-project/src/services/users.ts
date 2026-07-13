import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.ts";
import type { UserData } from "../types/types.ts";

export async function createUser(user: UserData) {
  await setDoc(doc(db, "users", user.uid), user);
}

export async function getCurrentUser(uid: string): Promise<UserData | null> {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserData;
}

export async function getGoogleUser(uid: string): Promise<UserData | null> {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserData;
}

export async function createGoogleUser(uid: string, email: string) {
  await setDoc(doc(db, "users", uid), {
    uid,
    email,
    nGames: 0,
    wins: 0,
    winStreak: 0,
  });
}
