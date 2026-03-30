"use client";

import { useState } from "react";

export default function MealIdeas({ ingredient }: { ingredient: string }) {
  const [meals, setMeals] = useState<any[]>([]);

  async function loadMealIdeas() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

    if (data.meals) {
      setMeals(data.meals);
    } else {
      setMeals([]);
    }
  }

  return (
    <div className="p-4 border rounded-md space-y-4">
      <button
        onClick={loadMealIdeas}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Load Meal Ideas
      </button>

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-3 border rounded-md">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}