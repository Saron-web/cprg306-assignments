import items from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}

