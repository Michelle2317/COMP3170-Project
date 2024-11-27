import React, { useState } from "react";
import "../styles/recipeForm.css";

const RecipeForm = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeToCook, setTimeToCook] = useState(30);
  const [mealType, setMealType] = useState("Breakfast");
  const [ethnicity, setEthnicity] = useState("");
  const [error, setError] = useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !timeToCook || !coverPhoto) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    alert("Recipe submitted successfully!");
    setCoverPhoto(null);
    setName("");
    setDescription("");
    setTimeToCook(30);
    setMealType("Breakfast");
    setEthnicity("");
  };

  return (
    <div className="mainContainer">
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div className="upload-cover">
        {coverPhoto ? (
          <div className="cover-preview">
            <img src={coverPhoto} alt="Cover" className="cover-photo" />
            <button
              type="button"
              className="remove-cover"
              onClick={() => setCoverPhoto(null)}
            >
              Remove
            </button>
          </div>
        ) : (
          <label className="upload-button">
            <input type="file" onChange={handlePhotoUpload} required />
            <span>Upload Cover</span>
          </label>
        )}
      </div>

      <div className="form-group">
        <label>Name*</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
          required
        />
      </div>

      <div className="form-group">
        <label>Description*</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label>Time to Cook (In Minutes)*</label>
        <input
          type="number"
          min="1"
          max="360"
          step="1"
          value={timeToCook}
          onChange={(e) => setTimeToCook(Number(e.target.value))}
          required
        />
      </div>

      <div className="form-group">
        <label>Meal Type (Optional)</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
      </div>

      <div className="form-group">
        <label>Ethnicity (Optional)</label>
        <input
          type="text"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
          placeholder="Enter ethnicity (e.g., Italian, Thai)"
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="submit-button">
        Submit Recipe
      </button>
    </form>
    </div>
  );
};

export default RecipeForm;
