import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { Bookmark, BookmarkBorder, Print, Share } from '@mui/icons-material';

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
		return <Typography>Loading...</Typography>;
	}

	return (
		<Box sx={{ padding: 3 }}>
			{/* Recipe Name */}
			<Typography variant='h3' gutterBottom>
				{recipe.strMeal}
			</Typography>

			{/* Publisher */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: 2,
				}}
			>
				<Typography
					variant='body1'
					color='textSecondary'
				>
					Publisher:{' '}
					{recipe.strSource
						? recipe.strSource
						: 'Unknown Publisher'}
				</Typography>
			</Box>

			{/* Description */}
			<Typography variant='body1' paragraph>
				{placeholderDescription}
			</Typography>

			{/* Save, Print, Share Buttons */}
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					marginBottom: 2,
					position: 'relative',
				}}
			>
				{/* Save Button */}
				<button
					onClick={handleSave}
					style={{
						display: 'flex',
						alignItems: 'center',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					{isSaved ? (
						<Bookmark
							sx={{
								marginRight:
									'8px',
							}}
						/>
					) : (
						<BookmarkBorder
							sx={{
								marginRight:
									'8px',
							}}
						/>
					)}{' '}
					{isSaved ? 'Saved' : 'Save'}
				</button>

				{/* Print Button */}
				<button
					onClick={handlePrint}
					style={{
						display: 'flex',
						alignItems: 'center',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					<Print
						sx={{
							marginRight: '8px',
						}}
					/>
					Print
				</button>

				{/* Share Button */}
				<Box sx={{ position: 'relative' }}>
					<button
						onClick={handleShare}
						style={{
							display: 'flex',
							alignItems: 'center',
							padding: '8px 16px',
							cursor: 'pointer',
						}}
					>
						<Share
							sx={{
								marginRight:
									'8px',
							}}
						/>{' '}
						Share
					</button>
					{showPopup && (
						<Box
							sx={{
								position: 'absolute',
								top: '50%',
								left: '110%',
								transform: 'translateY(-50%)',
								backgroundColor:
									'black',
								color: 'white',
								padding: '5px 10px',
								borderRadius:
									'5px',
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
				<Grid item xs={12} md={8}>
					<img
						src={recipe.strMealThumb}
						alt={recipe.strMeal}
						style={{
							width: '100%',
							borderRadius: '8px',
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant='h6' gutterBottom>
						Nutrition Facts
					</Typography>
					<Typography variant='body1'>
						Calories:{' '}
						{placeholderNutrition.calories}
					</Typography>
					<Typography variant='body1'>
						Carbs:{' '}
						{placeholderNutrition.carbs}
					</Typography>
					<Typography variant='body1'>
						Protein:{' '}
						{placeholderNutrition.protein}
					</Typography>
					<Typography variant='body1'>
						Fat: {placeholderNutrition.fat}
					</Typography>
				</Grid>
			</Grid>

			<Box sx={{ display: 'flex', marginBottom: 2 }}>
				<Typography
					variant='body1'
					sx={{ marginRight: 5 }}
				>
					Prep Time: {placeholderTimes.prepTime}
				</Typography>
				<Typography
					variant='body1'
					sx={{ marginRight: 5 }}
				>
					Cook Time: {placeholderTimes.cookTime}
				</Typography>
				<Typography
					variant='body1'
					sx={{ marginRight: 5 }}
				>
					Serving Size:{' '}
					{placeholderTimes.servingSize}
				</Typography>
			</Box>

			{/* Ingredients */}
			<Typography variant='h6' gutterBottom>
				Ingredients
			</Typography>
			<ul
				style={{
					paddingLeft: '20px',
					marginBottom: '20px',
				}}
			>
				{Object.keys(recipe)
					.filter(
						(key) =>
							key.includes(
								'strIngredient'
							) && recipe[key]
					)
					.map((ingredientKey, index) => {
						const ingredient =
							recipe[ingredientKey];
						const measure =
							recipe[
								`strMeasure${
									index +
									1
								}`
							];
						return (
							<li
								key={index}
								style={{
									marginBottom:
										'8px',
								}}
							>
								<Typography variant='body1'>
									{
										measure
									}{' '}
									{
										ingredient
									}
								</Typography>
							</li>
						);
					})}
			</ul>

			{/* Instructions */}
			<Typography variant='h6' gutterBottom>
				Instructions
			</Typography>
			<ol style={{ paddingLeft: '20px' }}>
				{recipe.strInstructions
					?.split('\n')
					.map((step, index) => (
						<li
							key={index}
							style={{
								marginBottom:
									'8px',
							}}
						>
							<Typography variant='body1'>
								{step}
							</Typography>
						</li>
					))}
			</ol>

			{/* YouTube Video */}
			{recipe.strYoutube && (
				<Box sx={{ marginTop: 2 }}>
					<Typography variant='h6' gutterBottom>
						Watch the Recipe Video
					</Typography>
					<iframe
						width='800'
						height='500'
						src={`https://www.youtube.com/embed/${
							recipe.strYoutube.split(
								'v='
							)[1]
						}`}
						title='YouTube video'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						style={{ borderRadius: '8px' }}
					></iframe>
				</Box>
			)}
		</Box>
	);
}
