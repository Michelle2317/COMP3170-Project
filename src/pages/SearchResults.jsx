import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

export default function SearchResults() {
	const [recipes, setRecipes] = useState([]);
	const location = useLocation();
	const query = new URLSearchParams(location.search).get('query');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			setLoading(true);
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
			);
			const data = await response.json();
			setRecipes(data.meals || []);
			setLoading(false);
		};
		if (query) fetchRecipes();
	}, [query]);

	return (
		<Box sx={{ padding: 3 }}>
			<Typography variant='h4' gutterBottom>
				Search Results for "{query}"
			</Typography>

			{loading ? (
				<Typography variant='h6'>Loading Recipes...</Typography>
			) : (
				<Grid container spacing={3}>
					{recipes.map((recipe) => (
						<Grid
							item
							xs={12}
							sm={4}
							md={3}
							key={recipe.idMeal}
						>
							<RecipeCard
								title={
									recipe.strMeal
								}
								category={
									recipe.strCategory
								}
								image={
									recipe.strMealThumb
								}
								time={
									'Placeholder Time'
								}
								className='recipe-card'
								id={
									recipe.idMeal
								}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
}
