"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div style={{ padding: "20px" }}>
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </>
      )}
    </div>
  );
}