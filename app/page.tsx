import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">CPRG 306 Assignments</h1>

      <ul className="space-y-4 text-lg">
        <li>
          <Link href="/week-4" className="text-blue-600 hover:underline">
            Week 4
          </Link>
        </li>
      </ul>
    </main>
  );
}