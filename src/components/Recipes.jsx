import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Recipes = ({ recipes }) => {
  return (
    <div className="container">
      {recipes && recipes.length > 0 ? (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img
                className="recipe-card-img"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <div className="recipe-card-body">
                <h5 className="recipe-title">
                  {recipe.strMeal.length < 20
                    ? recipe.strMeal
                    : `${recipe.strMeal.substring(0, 25)}...`}
                </h5>
                <p className="recipe-category">
                  Category: <span>{recipe.strCategory}</span>
                </p>
                <Link to={`/recipe/${recipe.idMeal}`} className="btn-view">
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">
          No recipes found. Try another search.
        </p>
      )}
    </div>
  );
};

export default Recipes;
