import { db } from "../_utils/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const COLLECTION_NAME = "shopping-list";

export async function getItems(userId: string) {
  const itemsRef = collection(db, COLLECTION_NAME);
  const q = query(itemsRef, where("userId", "==", userId));

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addItem(userId: string, item: string) {
  const itemsRef = collection(db, COLLECTION_NAME);

  await addDoc(itemsRef, {
    userId: userId,
    item: item,
  });
}