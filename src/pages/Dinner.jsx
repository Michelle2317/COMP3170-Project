import RecipeCard from "../components/RecipeCard"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Dinner() {

        const recipeInfo =                         
        <RecipeCard
        title="Pasta"
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        image="./assets/images/pasta.jpg"
        className="recipe-card"
        time="50 mins"
        />

        return (
                <>
                <h1 className="PageHeading">Dinner</h1>
                <div className="RecipeListLayout">
                <div className="Filter">
                        <h2 className="FilterText">Filter:</h2>
                        <details className="filterDetails">
                                <summary className="filterSummary">Cuisine</summary>
                                        <FormGroup className="filterGroup">
                                                <FormControlLabel control={<Checkbox />} label="Chinese"  className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Italian" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Japanese" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="French" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Korean" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Vegetarian" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Gluten-Free" className="checkBox"/>
                                        </FormGroup>
                        </details>
                        <details className="filterDetails">
                                <summary className="filterSummary">Ingredients</summary>
                                        <FormGroup className="filterGroup">
                                                <FormControlLabel control={<Checkbox />} label="Eggs" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Chicken" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Beef" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Pork" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Vegetables" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Milk" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="Butter" className="checkBox"/>
                                        </FormGroup>
                        </details>
                        <details className="filterDetails">
                                <summary className="filterSummary">Time</summary>
                                        <FormGroup className="filterGroup">
                                                <FormControlLabel control={<Checkbox />} label="less than < 30mins" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="30 mins - 1 hour" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="1 hr - 2 hrs" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="2 hrs - 3 hrs" className="checkBox"/>
                                                <FormControlLabel control={<Checkbox />} label="more than > 3hrs" className="checkBox"/>
                                        </FormGroup>
                        </details>
                </div>
                <div className="RecipeLists">
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                </div>
                <div className="RecommendedRecipes">
                        <h3>Recommendations based on your past Recipes:</h3>
                        {recipeInfo}
                        {recipeInfo}
                        {recipeInfo}
                </div>
        </div>
        </>
        )
}