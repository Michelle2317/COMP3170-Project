import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import Carousel from "../components/carrosuel/carousel.jsx";

// Paths for images in the public folder
const profileImage = "/assets/images/man.jpg";
const Insta = "/assets/images/instagram.jpg";
const X = "/assets/images/x.jpg";
const storyOne = "/assets/images/storyOne.jpg";
const storyTwo = "/assets/images/storyTwo.jpg";
const storyThree = "/assets/images/storyThree.jpg";
const storyFour = "/assets/images/storyFour.jpg";
const profileBackground = "/assets/images/profileBackground.jpg";

export default function Profile() {
  const [firstName, setFirstName] = useState("Nathan");
  const [lastName, setLastName] = useState("Schroter");
  const [bio, setBio] = useState("Photographer | Foodie | Traveler");
  const [email, setEmail] = useState("ndschroter ....");
  const [phone, setPhone] = useState("778 ....");
  const [isEdited, setIsEdited] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Newest");
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      setRecipes(storedRecipes);
      setPostCount(storedRecipes.length);
    }
  }, []);
  

  const handleRemoveRecipeFromProfile = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setPostCount(updatedRecipes.length);
  };

  const handleSort = (order) => {
    const sortedRecipes =
      order === "Newest"
        ? [...recipes].sort((a, b) => new Date(b.date) - new Date(a.date))
        : [...recipes].sort((a, b) => new Date(a.date) - new Date(b.date));
    setRecipes(sortedRecipes);
    setActiveFilter(order);
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setIsEdited(true);
  };

  const handleSave = () => {
    setIsEdited(false);
    alert("Profile information saved!");
  };

  const renderRecipes = () => {
    return (
      <div className="recipesGrid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipeItem">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <button
              className="remove-button-small"
              onClick={() => handleRemoveRecipeFromProfile(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="profileContainer">
      <div className="profileCard">
        <div className="profileHeader">
          <img className="headerBackground" src={profileBackground} alt="Background" />
          <img className="profileImage" src={profileImage} alt="Profile" />
          <div className="profileDetails">
            <h1 className="profileName">
              {firstName} {lastName}
            </h1>
            <p className="profileBio">{bio}</p>
          </div>
        </div>
        <h2 className="about">About Me</h2>
        <p className="aboutText">
        Hi there! I’m a passionate home chef who loves experimenting in the kitchen and creating delicious meals from scratch. Cooking is my way of bringing people together and sharing the joy of good food. When I’m not trying out new recipes, I enjoy exploring local markets for fresh ingredients and culinary inspiration.
        </p>
        <h2 className="socialsHeader">Socials</h2>
        <div className="socials">
          <img src={Insta} alt="Instagram" />
          <img src={X} alt="X" />
        </div>
        <div className="profileEditSection">
          <h1>Contacts</h1>
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
        <div className="storiesSection">
          <h2>Featured Stories</h2>
          <div className="stories">
            <div className="story">
              <img src={storyOne} alt="Story One" />
            </div>
            <div className="story">
              <img src={storyTwo} alt="Story Two" />
            </div>
            <div className="story">
              <img src={storyThree} alt="Story Three" />
            </div>
            <div className="story">
              <img src={storyFour} alt="Story Four" />
            </div>
          </div>
        </div>
        <div className="Carosuel">
          <Carousel/>
        </div>
      </div>
      <div className="recipesSection">
        <h2>Recipes</h2>
        <div className="filter">
          <label>Sort By:</label>
          <select
            value={activeFilter}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="Newest">Newest to Oldest</option>
            <option value="Oldest">Oldest to Newest</option>
          </select>
        </div>
        {renderRecipes()}
      </div>
    </div>
  );
}


