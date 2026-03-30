"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState("");

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>You must be logged in to view this page.</h2>
        <Link href="/week-9">Go back to Login</Link>
      </div>
    );
  }

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item: any) => {
    const cleaned = item.name
      .replace(/,.*$/, "")
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .toLowerCase();

    setSelectedItem(cleaned);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="flex gap-6 mt-6">
        <div className="w-1/2">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>

      <Link href="/week-9" className="block mt-6 underline">
        Back to Home
      </Link>
    </div>
  );
}