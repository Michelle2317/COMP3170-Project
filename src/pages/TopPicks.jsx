import RecipeCard from '../components/RecipeCard';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TopPicks() {
	const [randomRecipes, setRandomRecipes] = useState([]);
	const [recommendedRecipes, setRecommendedRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchRandomRecipes = async (num) => {
		const fetchPromises = [];
		for (let i = 0; i < num; i++) {
			fetchPromises.push(
				fetch(
					'https://www.themealdb.com/api/json/v1/1/random.php'
				).then((res) => res.json())
			);
		}

		const results = await Promise.all(fetchPromises);
		return results.map((result) => result.meals[0]);
	};

	useEffect(() => {
		const fetchData = async () => {
			const randomData = fetchRandomRecipes(9);
			const recommendedData = fetchRandomRecipes(3);

			const [randomRecipes, recommendedRecipes] =
				await Promise.all([
					randomData,
					recommendedData,
				]);

			setRandomRecipes(randomRecipes);
			setRecommendedRecipes(recommendedRecipes);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			<h1 className='PageHeading'>Top Picks</h1>
			<div className='RecipeListLayout'>
				<div className='Filter'>
					<h2 className='FilterText'>Filter:</h2>
					<details className='filterDetails'>
						<summary className='filterSummary'>
							Cuisine
						</summary>
						<FormGroup className='filterGroup'>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Chinese'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Italian'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Japanese'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='French'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Korean'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Vegetarian'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Gluten-Free'
								className='checkBox'
							/>
						</FormGroup>
					</details>
					<details className='filterDetails'>
						<summary className='filterSummary'>
							Ingredients
						</summary>
						<FormGroup className='filterGroup'>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Eggs'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Chicken'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Beef'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Pork'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Vegetables'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Milk'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='Butter'
								className='checkBox'
							/>
						</FormGroup>
					</details>
					<details className='filterDetails'>
						<summary className='filterSummary'>
							Time
						</summary>
						<FormGroup className='filterGroup'>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='less than < 30mins'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='30 mins - 1 hour'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='1 hr - 2 hrs'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='2 hrs - 3 hrs'
								className='checkBox'
							/>
							<FormControlLabel
								control={
									<Checkbox />
								}
								label='more than > 3hrs'
								className='checkBox'
							/>
						</FormGroup>
					</details>
				</div>
				<div className='RecipeLists'>
					<div className='recipeGrid'>
						{loading ? (
							<div>
								Loading
								Recipes...
							</div>
						) : (
							randomRecipes.map(
								(
									recipe,
									index
								) => (
									<Link
										key={
											index
										}
										to={`/recipe/${recipe.idMeal}`}
										style={{
											textDecoration:
												'none',
										}}
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
											className='recipe-card'
											time={
												recipe.strTime ||
												'Placeholder Time'
											}
										/>
									</Link>
								)
							)
						)}
					</div>
				</div>

				<div className='RecommendedRecipes'>
					<h3>Recommended Recipes:</h3>
					{loading ? (
						<div>Loading Recipes...</div>
					) : (
						recommendedRecipes.map(
							(recipe, index) => (
								<Link
									key={
										index
									}
									to={`/recipe/${recipe.idMeal}`}
									style={{
										textDecoration:
											'none',
									}}
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
										className='recipe-card'
										time={
											recipe.strTime ||
											'Placeholder Time'
										}
									/>
								</Link>
							)
						)
					)}
				</div>
			</div>
		</>
	);
}
