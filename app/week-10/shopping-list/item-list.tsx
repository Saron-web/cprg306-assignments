"use client";

import { useEffect, useState } from "react";
import { getItems } from "../_services/shopping-list-service";

export default function ItemList({
  userId,
  onItemSelect,
}: {
  userId: string;
  onItemSelect: (name: string) => void;
}) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getItems(userId);
      setItems(data);
    }
    load();
  }, [userId]);

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onItemSelect(item.item)}
          style={{ cursor: "pointer" }}
        >
          {item.item}
        </li>
      ))}
    </ul>
  );
}