"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) => {
    // Week 7 requirement: functional update
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List — Week 7</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="mt-8">
        <ItemList items={items} />
      </div>
    </main>
  );
}