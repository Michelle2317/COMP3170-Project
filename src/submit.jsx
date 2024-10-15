import React, { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [image, setImage] = useState(null);

  const ingredients = [
    { name: "Avocado", icon: "🥑" },
    { name: "Carrot", icon: "🥕" },
    { name: "Wheat", icon: "🌾" },
    { name: "Bread", icon: "🍞" },
    { name: "Tomato", icon: "🍅" },
    { name: "Kiwi", icon: "🥝" },
    { name: "Lemon", icon: "🍋" },
    { name: "Milk", icon: "🥛" },
  ];

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ recipeTitle, selectedIngredients, image });
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div className="header">
        <button type="button" className="cancel-button">Cancel</button>
        <button type="submit" className="publish-button">Publish</button>
      </div>
      <div className="image-upload">
        <label htmlFor="imageUpload" className="image-label">
          {image ? (
            <img src={image} alt="Recipe" className="preview-image" />
          ) : (
            <div className="image-placeholder">Add images</div>
          )}
        </label>
        <input
          type="file"
          id="imageUpload"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>
      <div className="form-group">
        <label>Recipe title*</label>
        <input
          type="text"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
          placeholder="Recipe title"
          required
        />
      </div>
      <div className="form-group">
        <label>Ingredients*</label>
        <div className="ingredients-select">
          {ingredients.map((ingredient) => (
            <button
              key={ingredient.name}
              type="button"
              className={`ingredient-button ${
                selectedIngredients.includes(ingredient.name) ? "selected" : ""
              }`}
              onClick={() => toggleIngredient(ingredient.name)}
            >
              {ingredient.icon} {ingredient.name}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;