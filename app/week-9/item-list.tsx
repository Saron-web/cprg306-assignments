"use client";

import Item from "./item";
import { useState } from "react";

type GroceryItem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function ItemList({
  items,
  onItemSelect,
}: {
  items: GroceryItem[];
  onItemSelect: (item: GroceryItem) => void;
}) {
  const [sortBy, setSortBy] = useState<"name" | "category">("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Shopping List</h2>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setSortBy("name")}>Sort by Name</button>
        <button onClick={() => setSortBy("category")}>Sort by Category</button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}