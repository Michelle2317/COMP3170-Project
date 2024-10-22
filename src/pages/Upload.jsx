import React, { useState } from "react";
import "../../styles/recipeForm.css";

const RecipeForm = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeToCook, setTimeToCook] = useState(30);
  const [mealType, setMealType] = useState("Breakfast");
  const [ethnicity, setEthnicity] = useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="recipe-form">
      <div className="upload-cover">
        {coverPhoto ? (
          <img src={coverPhoto} alt="Cover" className="cover-photo" />
        ) : (
          <label className="upload-button">
            <input type="file" onChange={handlePhotoUpload} />
            <span>Upload Cover</span>
          </label>
        )}
      </div>
      
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
        />
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
        ></textarea>
      </div>
      
      <div className="form-group">
        <label>Time to Cook</label>
        <input
          type="range"
          min="10"
          max="120"
          value={timeToCook}
          onChange={(e) => setTimeToCook(e.target.value)}
        />
        <span>{timeToCook} min</span>
      </div>
      
      <div className="form-group">
        <label>Recipe Type</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      <div className="form-group">
        <label>Ethnicity</label>
        <input
          type="text"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
          placeholder="Enter ethnicity (e.g., Italian, Thai)"
        />
      </div>
    </div>
  );
};

export default RecipeForm;