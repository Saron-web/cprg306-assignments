"use client";

import { useState } from "react";
import { addItem } from "../_services/shopping-list-service";

export default function NewItem({ userId }: { userId: string }) {
  const [itemName, setItemName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!itemName.trim()) return;

    await addItem(userId, itemName);
    setItemName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item"
      />

      <button type="submit">Add Item</button>
    </form>
  );
}