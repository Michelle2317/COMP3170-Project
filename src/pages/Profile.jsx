import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const [firstName, setFirstName] = useState("Nathan");
  const [lastName, setLastName] = useState("Schroter");
  const [email, setEmail] = useState("ndschroter ....");
  const [phone, setPhone] = useState("778 ....");
  const [isEdited, setIsEdited] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

  const recipes = [
    {
      name: "Chicken",
      image: "../public/recipeOne.jpg",
      ingredients: "Chicken, spices, oil",
      instructions: "Cook chicken with spices in oil.",
    },
    {
      name: "Pasta",
      image: "../public/recipeTwo.jpg",
      ingredients: "Pasta, sauce, cheese",
      instructions: "Boil pasta, mix with sauce and cheese.",
    },
    {
      name: "Salad",
      image: "../public/recipeThree.jpg",
      ingredients: "Lettuce, tomatoes, dressing",
      instructions: "Mix all ingredients together.",
    },
    {
      name: "Soup",
      image: "../public/recipeFour.jpg",
      ingredients: "Broth, vegetables, spices",
      instructions: "Simmer vegetables in broth with spices.",
    },
  ];

  const handleSaveRecipe = (recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    navigate("/saverecipes");
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setIsEdited(true);
  };

  const handleSave = () => {
    alert("Changes saved!");
    setIsEdited(false);
  };


  return (
      <div className="mainContainer">
      <div className="information">
        <div className="image">
          <img src="../public/man.jpg" alt="Profile" />
        </div>
        <h1>About Me</h1>
        <h2>First Name</h2>
        <input
          type="text"
          value={firstName}
          onChange={handleChange(setFirstName)}
          placeholder="Nathan"
        />
        <h2>Last Name</h2>
        <input
          type="text"
          value={lastName}
          onChange={handleChange(setLastName)}
          placeholder="Schroter"
        />
        <h2>Email</h2>
        <input
          type="text"
          value={email}
          onChange={handleChange(setEmail)}
          placeholder="...@gmail.com"
        />
        <h2>Phone Number</h2>
        <input
          type="text"
          value={phone}
          onChange={handleChange(setPhone)}
          placeholder="778 ...."
        />
        {isEdited && (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
      <div className="recipeContainer">
      <div className="recipeInformation">
      </div>
      <div className="recipes">
        <h1>Recent Recipes</h1>
        <div className="recipesImages">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipeItem">
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              <button
                className="save-button-small"
                onClick={() => handleSaveRecipe(recipe)}
              >
                Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

