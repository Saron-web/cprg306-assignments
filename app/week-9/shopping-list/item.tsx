"use client";

export default function Item({
  name,
  quantity,
  category,
  onSelect,
}: {
  name: string;
  quantity: number;
  category: string;
  onSelect: () => void;
}) {
  return (
    <li
      className="border p-2 rounded cursor-pointer hover:bg-gray-100"
      onClick={onSelect}
    >
      <div className="font-bold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}


