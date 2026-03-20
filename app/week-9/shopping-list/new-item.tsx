"use client";

import { useState } from "react";

interface NewItemProps {
  onAddItem: (item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) => void;
}

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

export default function NewItem({ onAddItem }: NewItemProps) {
  const [item, setItem] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      ...item,
      id: crypto.randomUUID(),
    };

    onAddItem(newItem);
    setItem(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          className="border p-2 w-full"
          min={1}
          required
        />
      </div>

      <div>
        <label className="block mb-1">Category:</label>
        <select
          name="category"
          value={item.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned">Canned</option>
          <option value="dry">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}