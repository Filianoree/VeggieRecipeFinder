import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipeDetails({ recipe, onBackToSearch }) {
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=d4783cb5909b440e8cb637408f1473aa`
        );
        const plainTextInstructions = response.data.instructions.replace(
          /<[^>]+>/g,
          ""
        );
        setInstructions(plainTextInstructions);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchInstructions();
  }, [recipe.id]);

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p className="instructions">
        <span>Instructions:</span> {instructions}
      </p>
      <button onClick={onBackToSearch} className="back-button">
        Back to Search
      </button>
    </div>
  );
}

export default RecipeDetails;
