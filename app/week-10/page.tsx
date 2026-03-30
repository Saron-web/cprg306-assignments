"use client";

import Link from "next/link";

export default function Week10Page() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-bold mb-4">Week 10</h1>

      <p className="mb-4">
        Welcome to Week 10. Click below to open your authenticated shopping list.
      </p>

      <Link
        href="/week-10/shopping-list"
        className="underline text-blue-600 hover:text-blue-800"
      >
        Go to Shopping List
      </Link>
    </div>
  );
}