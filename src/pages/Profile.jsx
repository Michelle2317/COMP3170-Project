import React, { useState } from "react";
import "../styles/profile.css";

export default function Profile() {
  const [firstName, setFirstName] = useState("Nathan");
  const [lastName, setLastName] = useState("Schroter");
  const [email, setEmail] = useState("ndschroter ....");
  const [phone, setPhone] = useState("778 ....");
  const [address, setAddress] = useState("5311 ....");
  const [isEdited, setIsEdited] = useState(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setIsEdited(true);
  };

  const handleSave = () => {
    // Logic to save changes
    alert("Changes saved!");
    setIsEdited(false);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="image">
          <img src="../public/man.jpg" alt="Profile" />
        </div>
        <div className="information">
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

          <h2>Address</h2>
          <input
            type="text"
            value={address}
            onChange={handleChange(setAddress)}
            placeholder="5311 ...."
          />

          {isEdited && (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          )}
        </div>
        <div className="recipes">
          <h1>Recent Recipes</h1>
          <div className="recipesImages">
            <div>
              <h2>Chicken</h2>
              <img src="../public/recipeOne.jpg" alt="Recipe One" />
            </div>
            <div>
              <h2>Pasta</h2>
              <img src="../public/recipeTwo.jpg" alt="Recipe Two" />
            </div>
            <div>
              <h2>Chicken</h2>
              <img src="../public/recipeThree.jpg" alt="Recipe Three" />
            </div>
            <div>
              <h2>Pasta</h2>
              <img src="../public/recipeFour.jpg" alt="Recipe Four" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
