import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles.css";

const Recipe = () => {
  const { id } = useParams();
  const [activeRecipe, setActiveRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const req = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const res = await req.json();
        setActiveRecipe(res.meals ? res.meals[0] : null);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  // Extract ingredients + measures
  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="container mt-4">
      {activeRecipe ? (
        <div className="recipe-detail">
          <img
            className="recipe-detail-img"
            src={activeRecipe.strMealThumb}
            alt={activeRecipe.strMeal}
          />
          <div className="recipe-detail-body">
            <h2 className="recipe-detail-title">{activeRecipe.strMeal}</h2>
            <p className="recipe-meta">
              <strong>Category:</strong> {activeRecipe.strCategory} |{" "}
              <strong>Area:</strong> {activeRecipe.strArea}
            </p>
            <h4>Ingredients</h4>
            <ul className="ingredients-list">
              {getIngredients(activeRecipe).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Instructions</h4>
            <p className="recipe-instructions">
              {activeRecipe.strInstructions}
            </p>
            {activeRecipe.strSource && (
              <p>
                <a
                  href={activeRecipe.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-source"
                >
                  View Source
                </a>
              </p>
            )}
            <Link to="/" className="btn btn-home">
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading recipe...</p>
      )}
    </div>
  );
};

export default Recipe;
