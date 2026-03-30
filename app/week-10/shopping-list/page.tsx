"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "../_components/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function ShoppingListPage() {
  const { user, loading } = useAuthContext();
  const [items, setItems] = useState<any[]>([]);

  // Load items from Firestore when user is ready
  useEffect(() => {
    if (!loading && user) {
      loadItems();
    }
  }, [loading, user]);

  async function loadItems() {
    const data = await getItems(user!.uid);
    setItems(data);
  }

  async function handleAddItem(item: any) {
    // Add to Firestore
    const id = await addItem(user!.uid, item);

    // Update UI immediately
    setItems([...items, { id, ...item }]);
  }

  if (loading) {
    return <p className="p-4">Loading...</p>;
  }

  if (!user) {
    return <p className="p-4">You must be logged in to view your shopping list.</p>;
  }

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Shopping List</h1>

      <NewItem onAdd={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}