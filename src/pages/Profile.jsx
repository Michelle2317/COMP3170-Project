import React, { useState } from "react";
import "../styles/profile.css";
import recipeOne from "../../public/assets/images/recipeOne.jpg";
import recipeTwo from "../../public/assets/images/recipetwo.jpg";
import recipeThree from "../../public/assets/images/recipeThree.jpg";
import recipeFour from "../../public/assets/images/recipeFour.jpg";
import profileImage from "../../public/assets/images/man.jpg";
export default function Profile() {
  
  const [firstName, setFirstName] = useState("Nathan");
  const [lastName, setLastName] = useState("Schroter");
  const [email, setEmail] = useState("ndschroter ....");
  const [phone, setPhone] = useState("778 ....");
  const [isEdited, setIsEdited] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState(
    JSON.parse(localStorage.getItem("savedRecipes")) || []
  );

  const [activeFilter, setActiveFilter] = useState("Profile");
  const recipes = [
    {
      name: "Chicken",
      image: recipeOne,
      ingredients: "Chicken, spices, oil",
      instructions: "Cook chicken with spices in oil.",
    },
    {
      name: "Pasta",
      image: recipeTwo,
      ingredients: "Pasta, sauce, cheese",
      instructions: "Boil pasta, mix with sauce and cheese.",
    },
    {
      name: "Salad",
      image: recipeThree,
      ingredients: "Lettuce, tomatoes, dressing",
      instructions: "Mix all ingredients together.",
    },
    {
      name: "Soup",
      image: recipeFour,
      ingredients: "Broth, vegetables, spices",
      instructions: "Simmer vegetables in broth with spices.",
    },
  ];
  
    const handleSaveRecipe = (recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };
    const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setIsEdited(true);
  };
    const handleSave = () => {
    alert("Changes saved!");
    setIsEdited(false);
  };
    const renderRecipes = () => {
    const displayedRecipes =
    activeFilter === "Saved Recipes" ? savedRecipes : recipes;

    return (
      <div className="recipesImages">
        {displayedRecipes.map((recipe, index) => (
          <div key={index} className="recipeItem">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            {activeFilter === "Profile" && (
              <button
                className="save-button-small"
                onClick={() => handleSaveRecipe(recipe)}
              >
                Save
              </button>
            )}
            {activeFilter === "Saved Recipes" && (
              <button
                className="save-button-small delete-button"
                onClick={() => handleRemoveRecipe(recipe)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };


    const handleRemoveRecipe = (recipe) => {
    const updatedRecipes = savedRecipes.filter((r) => r.name !== recipe.name);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="mainContainer">
      
      <div className="filterNav">
        <button
          className={`filterButton ${
            activeFilter === "Profile" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("Profile")}
        >
          Profile
        </button>
        <button
          className={`filterButton ${
            activeFilter === "Saved Recipes" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("Saved Recipes")}
        >
          Saved Recipes
        </button>
      </div>


      <div className="content">
        {activeFilter === "Profile" && (
          <div className="information">

            <div className="image">
              <img src={profileImage} alt="Profile" />
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
        )}

        {activeFilter === "Saved Recipes" && (
          <div className="recipes">
            <h1>Saved Recipes</h1>
            {renderRecipes()}
          </div>
        )}

        {activeFilter === "Profile" && (
          <div className="recipes">
            <h1>Recent Recipes</h1>
            {renderRecipes()}
          </div>
        )}
      </div>
    </div>
  );
}
