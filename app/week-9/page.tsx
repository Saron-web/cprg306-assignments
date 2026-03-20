"use client";

import { useAuth } from "../contexts/auth-context";

export default function Week9Page() {
  const { user, googleSignIn, firebaseSignOut } = useAuth()!;

  if (!user) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Week 9</h1>
        <p>You must be logged in to view this page.</p>
        <button
          onClick={googleSignIn}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1>Welcome, {user.displayName}</h1>
      <button onClick={firebaseSignOut}>Sign Out</button>
    </div>
  );
}