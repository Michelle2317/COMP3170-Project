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
        <Box sx={{ padding: 3 }}>
            {/* Recipe Name */}
            <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                    textAlign: { xs: 'center', md: 'left' } 
                }}
            >
                {recipe.strMeal}
            </Typography>

            {/* Save, Print, Share Button */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginBottom: 2, 
                    justifyContent: { xs: 'center', md: 'flex-start' }, 
                    position: 'relative' 
                }}
            >
                <RecipeButton
                    text={isSaved ? 'Saved' : 'Save'}
                    onClick={handleSave}
                    Icon={isSaved ? Bookmark : BookmarkBorder}
                />
                <RecipeButton text="Print" onClick={handlePrint} Icon={Print} />
                <Box sx={{ position: 'relative' }}>
                    <RecipeButton text="Share" onClick={handleShare} Icon={Share} />
                    {showPopup && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '110%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                fontSize: '12px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Link Copied!
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Recipe Image and Nutrition Facts */}
            <Grid container spacing={3} sx={{ marginBottom: 2 }}>
                {/* Nutrition Facts Section (aligned left on desktop centered on mobile) */}
                <Grid item xs={12} md={4} sx={{ order: { xs: 2, md: 1 }, textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 2, md: 0 } }}>
                    <Typography variant="h6" gutterBottom>
                        Nutrition Facts
                    </Typography>
                    {/* Nutrition info here */}
                </Grid>

                {/* Recipe Image Section (aligned right on desktop, centered on mobile) */}
                <Grid item xs={12} md={8} sx={{ order: { xs: 1, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        style={{
                            float: 'right', 
                            maxWidth: '40em', 
                            maxHeight: '25em', 
                            objectFit: 'contain', 
                            borderRadius: '8px', 
                            border: '5px solid var(--deep-pink)', 
                            marginLeft: '20px', 
                            marginBottom: '20px', 
                            marginRight: '5em', 
                            display: 'inline-block', 
                        }}
                    />
                </Grid>
            </Grid>

            {/* Additional content here */}
        </Box>
    );
}
