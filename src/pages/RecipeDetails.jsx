import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	Box,
	Typography,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import { Bookmark, BookmarkBorder, Print, Share } from '@mui/icons-material';
import RecipeButton from '../components/Button/RecipeButtons';

export default function RecipeDetails() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);
	const [showPopup, setShowPopup] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [servingSize, setServingSize] = useState(1);

	const placeholderNutrition = {
		calories: '250kcal',
		carbs: '30g',
		protein: '10g',
		fat: '5g',
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

	const handleServingSizeChange = (event) => {
		setServingSize(event.target.value);
	};

	// Adjust ingredients based on the serving size
	const getAdjustedIngredients = (servingSize) => {
		return Object.keys(recipe)
			.filter(
				(key) =>
					key.includes('strIngredient') &&
					recipe[key]
			)
			.map((ingredientKey, index) => {
				const ingredient = recipe[ingredientKey];
				const measure =
					recipe[`strMeasure${index + 1}`];

				const regex = /([0-9\.]+)\s*(\D*)/;
				const match = measure.match(regex);

				if (match) {
					const numericMeasure = parseFloat(
						match[1]
					);
					const unit = match[2].trim();
					let adjustedMeasure =
						numericMeasure * servingSize;

					if (adjustedMeasure % 1 === 0) {
						adjustedMeasure =
							adjustedMeasure.toFixed(
								0
							);
					} else {
						adjustedMeasure =
							adjustedMeasure.toFixed(
								2
							);
					}

					return {
						ingredient,
						measure: `${adjustedMeasure} ${unit}`,
					};
				}
				return {
					ingredient,
					measure: measure,
				};
			});
	};

	if (!recipe) {
		return <Typography>Loading Recipes...</Typography>;
	}

	return (
		<Box
			sx={{
				padding: 3,
				position: 'relative',
				marginLeft: '11rem',
			}}
		>
			{/* Recipe Name */}
			<Typography
				variant='h3'
				gutterBottom
				sx={{ fontWeight: 500, marginLeft: '20px' }}
			>
				{recipe.strMeal}
			</Typography>

			{/* Recipe Buttons */}
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					marginBottom: 2,
					position: 'relative',
					marginLeft: '20px',
				}}
			>
				<RecipeButton
					text={isSaved ? 'Saved' : 'Save'}
					onClick={handleSave}
					Icon={
						isSaved
							? Bookmark
							: BookmarkBorder
					}
					sx={{
						backgroundColor: 'black',
						color: 'white',
						'&:hover': {
							backgroundColor:
								'var(--deep-pink)',
						},
					}}
				/>
				<RecipeButton
					text='Print'
					onClick={handlePrint}
					Icon={Print}
					sx={{
						backgroundColor: 'black',
						color: 'white',
						'&:hover': {
							backgroundColor:
								'var(--deep-pink)',
						},
					}}
				/>

				<Box sx={{ position: 'relative' }}>
					<RecipeButton
						text='Share'
						onClick={handleShare}
						Icon={Share}
						sx={{
							backgroundColor:
								'black',
							color: 'white',
							'&:hover': {
								backgroundColor:
									'var(--deep-pink)',
							},
						}}
					/>
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

			{/* Recipe Image and Nutrition Facts Section */}
			<Grid
				container
				spacing={3}
				sx={{ marginBottom: 2, marginLeft: -0.5 }}
			>
				<Grid item xs={12} md={8}>
					<img
						src={recipe.strMealThumb}
						alt={recipe.strMeal}
						style={{
							width: '80%',
							maxHeight: '40rem',
							height: 'auto',
							borderRadius: '8px',
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography
						variant='h5'
						gutterBottom
						sx={{
							marginLeft: -15,
							fontWeight: 'bold',
						}}
					>
						Nutrition Facts
					</Typography>
					<Typography
						variant='body1'
						sx={{ marginLeft: -15 }}
					>
						Calories:{' '}
						<strong>
							{
								placeholderNutrition.calories
							}
						</strong>
					</Typography>
					<Typography
						variant='body1'
						sx={{ marginLeft: -15 }}
					>
						Carbs:{' '}
						<strong>
							{
								placeholderNutrition.carbs
							}
						</strong>
					</Typography>
					<Typography
						variant='body1'
						sx={{ marginLeft: -15 }}
					>
						Protein:{' '}
						<strong>
							{
								placeholderNutrition.protein
							}
						</strong>
					</Typography>
					<Typography
						variant='body1'
						sx={{ marginLeft: -15 }}
					>
						Fat:{' '}
						<strong>
							{
								placeholderNutrition.fat
							}
						</strong>
					</Typography>
				</Grid>
			</Grid>

			{/* Times Section */}
			<Box
				sx={{
					display: 'flex',
					gap: '1em',
					justifyContent: 'center',
					marginBottom: '4rem',
					marginLeft: '-36.5rem',
				}}
			>
				<Typography variant='body1'>
					<strong>Prep Time:</strong>{' '}
					{placeholderTimes.prepTime}
				</Typography>
				<Typography variant='body1'>
					<strong>Cook Time:</strong>{' '}
					{placeholderTimes.cookTime}
				</Typography>
				<Typography variant='body1'>
					<strong>Serving Size:</strong>{' '}
					{placeholderTimes.servingSize}
				</Typography>
			</Box>

			{/* Serving Size Selection */}
			<Box sx={{ marginBottom: '2rem', marginLeft: '20px' }}>
				<FormControl>
					<InputLabel id='selectLabel'>
						Serving Size
					</InputLabel>
					<Select
						labelId='selectLabel'
						id='select'
						value={servingSize}
						label='Serving Size'
						onChange={
							handleServingSizeChange
						}
					>
						<MenuItem value={1}>
							1 Serving
						</MenuItem>
						<MenuItem value={2}>
							2 Servings
						</MenuItem>
						<MenuItem value={3}>
							3 Servings
						</MenuItem>
						<MenuItem value={4}>
							4 Servings
						</MenuItem>
						<MenuItem value={5}>
							5 Servings
						</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{/* Ingredients Section */}
			<Box sx={{ marginBottom: '4rem', marginLeft: '20px' }}>
				<Typography
					variant='h5'
					gutterBottom
					sx={{ fontWeight: 'bold' }}
				>
					Ingredients
				</Typography>
				<ul style={{ paddingLeft: '20px' }}>
					{getAdjustedIngredients(
						servingSize
					).map((item, index) => (
						<li
							key={index}
							style={{
								marginBottom:
									'8px',
							}}
						>
							<Typography variant='body1'>
								{item.measure}{' '}
								{
									item.ingredient
								}
							</Typography>
						</li>
					))}
				</ul>
			</Box>

			{/* Instructions Section */}
			<Box sx={{ marginLeft: '20px', width: '50%' }}>
				<Typography
					variant='h5'
					gutterBottom
					sx={{ fontWeight: 'bold' }}
				>
					Instructions
				</Typography>
				<ol
					style={{
						paddingLeft: '20px',
						fontWeight: 'bold',
					}}
				>
					{recipe.strInstructions
						?.replace(/\n/g, ' ')
						.replace(/^\d+(\.|\))\s*/g, '')
						.replace(/STEP\s*\d+\s*/g, '')
						.split('. ')
						.map((step, index) => (
							<li
								key={index}
								style={{
									marginBottom:
										'2rem',
								}}
							>
								<Typography variant='body1'>
									{step.trim()}
									.
								</Typography>
							</li>
						))}
				</ol>
			</Box>

			{/* YouTube Video */}
			{recipe.strYoutube && (
				<Box
					sx={{
						marginTop: 8,
						marginBottom: 5,
						marginLeft: '20px',
					}}
				>
					<Typography
						variant='h5'
						gutterBottom
						sx={{ fontWeight: 'bold' }}
					>
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
