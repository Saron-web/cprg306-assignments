"use client";

import { useState } from "react";

type NewItemProps = {
  onAddItem: (item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) => void;
};

export default function NewItem({ onAddItem }: NewItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="item-name" className="block mb-1 font-medium">
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="item-quantity" className="block mb-1 font-medium">
          Quantity
        </label>
        <input
          id="item-quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="item-category" className="block mb-1 font-medium">
          Category
        </label>
        <select
          id="item-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}