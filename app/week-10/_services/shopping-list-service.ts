import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// --------------------------------------------------
// Get all shopping list items for the current user
// --------------------------------------------------
export async function getItems(userId: string) {
  const items: any[] = [];

  // Firestore path: users/{userId}/items
  const itemsRef = collection(db, "users", userId, "items");

  // Fetch all documents in the user's items collection
  const snapshot = await getDocs(itemsRef);

  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}

// --------------------------------------------------
// Add a new shopping list item for the current user
// --------------------------------------------------
export async function addItem(userId: string, item: any) {
  // Firestore path: users/{userId}/items
  const itemsRef = collection(db, "users", userId, "items");

  // Add the item to Firestore
  const docRef = await addDoc(itemsRef, item);

  // Return the new document ID so the UI can update immediately
  return docRef.id;
}