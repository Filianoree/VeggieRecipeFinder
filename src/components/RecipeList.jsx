import React from "react";

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe"
          onClick={() => onRecipeClick(recipe)}
        >
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
