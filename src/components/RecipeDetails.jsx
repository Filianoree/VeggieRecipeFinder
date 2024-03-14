import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function RecipeDetails({ recipe, onBackToSearch }) {
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      }
    };

    fetchInstructions();
  }, [recipe.id]);

  return (
    <div>
      <Helmet>
        <title>{recipe.title}</title>
      </Helmet>
      <h2>{recipe.title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={recipe.image} alt={recipe.title} />
          <p className="instructions">Instructions: {instructions}</p>
          <button onClick={onBackToSearch} className="back-button">
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
