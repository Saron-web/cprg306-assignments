type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p className="text-sm text-gray-600">Category: {category}</p>
    </li>
  );
}



