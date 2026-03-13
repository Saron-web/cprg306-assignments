"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

type GroceryItem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const [items, setItems] = useState<GroceryItem[]>(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function cleanItemName(name: string) {
    return name
      .split(",")[0] // remove quantity
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emojis
      .trim();
  }

  function handleItemSelect(item: GroceryItem) {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  }

  function handleAddItem(newItem: GroceryItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List – Week 8</h1>

      <div className="flex gap-8">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}