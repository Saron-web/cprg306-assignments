"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/autho-context";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleSelectItem = (item: any) => {
    const cleanedName = item.name.split(",")[0].trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="mt-6 flex gap-6">
        <ItemList items={items} onItemSelect={handleSelectItem} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}