"use client";

import { useState } from "react";
import { AuthContextProvider, useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  return (
    <AuthContextProvider>
      <Content />
    </AuthContextProvider>
  );
}

function Content() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [selectedItem, setSelectedItem] = useState("");

  if (!user) {
    return (
      <div>
        <h1>Shopping List</h1>
        <button onClick={gitHubSignIn}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <p>Welcome, {user.displayName}</p>
      <button onClick={firebaseSignOut}>Sign Out</button>

      <NewItem userId={user.uid} />

      <ItemList
        userId={user.uid}
        onItemSelect={(itemName: string) => setSelectedItem(itemName)}
      />

      <MealIdeas ingredient={selectedItem} />
    </div>
  );
}