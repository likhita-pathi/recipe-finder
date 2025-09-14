import React, { useState } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value.trim();
    if (!recipeName) return;

    try {
      const req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
      );
      const res = await req.json();
      // res.meals is null if no match found → fallback to []
      setRecipes(res.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  return (
    <div className="container">
      <Form getRecipe={getRecipe} />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default App;
