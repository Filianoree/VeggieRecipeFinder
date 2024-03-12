// App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./styles.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&apiKey=d4783cb5909b440e8cb637408f1473aa`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToSearch = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1 className="title">Veggie, a recipe finder</h1>
      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBackToSearch={handleBackToSearch}
        />
      ) : (
        <>
          <SearchBar onSearch={searchRecipes} />
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </>
      )}
    </div>
  );
}

export default App;
