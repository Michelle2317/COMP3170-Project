import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { Bookmark, BookmarkBorder, Print, Share } from '@mui/icons-material';
import RecipeButton from '../components/Button/RecipeButtons';

export default function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const placeholderDescription =
        'This is a placeholder short description for the recipe. Add details here about what makes this recipe unique and special.';
    const placeholderNutrition = {
        calories: '250 kcal',
        carbs: '30 g',
        protein: '10 g',
        fat: '5 g',
    };
    const placeholderTimes = {
        prepTime: '15 mins',
        cookTime: '30 mins',
        servingSize: '4 servings',
    };

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await response.json();
            setRecipe(data.meals[0]);
        };

        fetchRecipeDetails();
    }, [id]);

    const handleSave = () => {
        setIsSaved((prevState) => !prevState);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        });
    };

    if (!recipe) {
        return <Typography>Loading Recipes...</Typography>;
    }

    return (
        <Box sx={{ padding: 3, position: 'relative' }}>
            {/* Recipe Name */}
            <Typography variant="h3" gutterBottom>
                {recipe.strMeal}
            </Typography>

            {/* Times Section Positioned Below Title */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: '10px',
                    marginBottom: '20px',
                    gap: '1em', // This will ensure that the text is 1em apart
                }}
            >
                <Typography variant="body1">Prep Time: {placeholderTimes.prepTime}</Typography>
                <Typography variant="body1">Cook Time: {placeholderTimes.cookTime}</Typography>
                <Typography variant="body1">Serving Size: {placeholderTimes.servingSize}</Typography>
            </Box>

            {/* RecipeButtons */}
<Box
    sx={{
        display: 'flex',
        gap: 2,
        marginBottom: 2,
        position: 'relative',
    }}
>
    <RecipeButton
        text={isSaved ? 'Saved' : 'Save'}
        onClick={handleSave}
        Icon={isSaved ? Bookmark : BookmarkBorder}
    />
    <RecipeButton text="Print" onClick={handlePrint} Icon={Print} />
    <RecipeButton text="Share" onClick={handleShare} Icon={Share} />
</Box>

{/* "Link Copied!" Popup */}
{showPopup && (
    <Box
        sx={{
            marginTop: '10px', // Adds spacing below the buttons
            padding: '5px 10px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 2, // Ensure it appears above other elements
        }}
    >
        Link Copied!
    </Box>
)}


            {/* Nutrition Facts Section */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '2em' }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        Nutrition Facts
                    </Typography>
                    <Typography variant="body1">Calories: {placeholderNutrition.calories}</Typography>
                    <Typography variant="body1">Carbs: {placeholderNutrition.carbs}</Typography>
                    <Typography variant="body1">Protein: {placeholderNutrition.protein}</Typography>
                    <Typography variant="body1">Fat: {placeholderNutrition.fat}</Typography>
                </Box>
            </Box>

            {/* Image Section with Absolute Positioning */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%', // Aligns image with Nutrition Facts
                    right: 0,
                    marginRight: '5em', // Adjust this to move the image further or closer
                    zIndex: 1,
                }}
            >
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    style={{
                        maxWidth: '40em',
                        maxHeight: '25em',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        border: '5px solid var(--deep-pink)',
                        marginBottom: '20px',
                    }}
                />
            </Box>

            {/* Ingredients Section */}
            <Box sx={{ marginTop: '1em' }}>
                <Typography variant="h6" gutterBottom>
                    Ingredients
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    {Object.keys(recipe)
                        .filter(
                            (key) =>
                                key.includes('strIngredient') && recipe[key]
                        )
                        .map((ingredientKey, index) => {
                            const ingredient = recipe[ingredientKey];
                            const measure = recipe[`strMeasure${index + 1}`];
                            return (
                                <li key={index} style={{ marginBottom: '8px' }}>
                                    <Typography variant="body1">
                                        {measure} {ingredient}
                                    </Typography>
                                </li>
                            );
                        })}
                </ul>
            </Box>

            {/* Instructions Section */}
            <Box sx={{ marginTop: '2em' }}>
                <Typography variant="h6" gutterBottom>
                    Instructions
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    {recipe.strInstructions
                        ?.split('\n')
                        .map((step, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>
                                <Typography variant="body1">{step}</Typography>
                            </li>
                        ))}
                </ul>
            </Box>

            {/* YouTube Video */}
            {recipe.strYoutube && (
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Watch the Recipe Video
                    </Typography>
                    <iframe
                        width="800"
                        height="500"
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '8px' }}
                    ></iframe>
                </Box>
            )}
        </Box>
    );
}
