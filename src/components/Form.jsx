import React from "react";
import "../styles.css";

const Form = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe} className="search-form">
      <input
        type="text"
        name="recipeName"
        placeholder="Search recipes..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Form;
