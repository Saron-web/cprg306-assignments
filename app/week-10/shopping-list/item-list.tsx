export default function ItemList({ items }: { items: any[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="p-3 border rounded-md flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">
              Quantity: {item.quantity} — Category: {item.category}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}