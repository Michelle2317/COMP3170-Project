import { useState, useEffect } from 'react';
import Button from '../components/Button/ButtonRegular';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export default function Home() {
	const [randomRecipes, setRandomRecipes] = useState([]);

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
		fetchRandomRecipes(6).then((recipes) =>
			setRandomRecipes(recipes)
		);
	}, []);

	return (
		<>
			<div className='heroContainer'>
				<div>
					<h1>
						Embark on a Culinary Journey of{' '}
						<br />
						<span
							style={{
								color: 'var(--deep-pink)',
							}}
						>
							Discovery
						</span>{' '}
						and Sharing
					</h1>
					<p>
						Delicious meals for every
						occasion
					</p>
					<Link to='/recipes'>
						<Button text='Explore Recipes' />
					</Link>
				</div>
				<img
					className='heroImage'
					src='./assets/images/pasta.jpg'
					alt='Pesto Farfalle'
				/>
			</div>

			<div className='shareContainer'>
				<img
					className='shareImage'
					src='./assets/images/tiramisu.jpg'
					alt='Tiramisu'
				/>
				<div className='shareText'>
					<h2>
						Share Your{' '}
						<span
							style={{
								color: 'var(--deep-pink)',
							}}
						>
							Recipes
						</span>
					</h2>
					<p>
						Join our community of food
						lovers and share your favourite
						recipes!
						<br />
						Showcase your dishes, inspire
						others, and explore a diverse
						collection
						<br />
						of flavours from around the
						world.
					</p>
					<Link to='/addrecipe'>
						<Button text='Add Recipe' />
					</Link>
				</div>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<h2 className='somethingNew'>
					Try Something{' '}
					<span
						style={{
							color: 'var(--deep-pink)',
						}}
					>
						New
					</span>
				</h2>
				<MuiLink
					component={Link}
					to='/topPicks'
					sx={{
						textDecoration: 'none',
						color: 'var(--deep-pink)',
						fontWeight: 'bold',
						'&:hover': {
							textDecoration:
								'underline',
							color: 'var(--black)',
						},
						'&:active': {
							color: 'var(--light-gray)',
						},
						display: 'block',
						marginTop: '0.5rem',
						marginLeft: '73rem',
					}}
				>
					View More
				</MuiLink>
			</div>

			<div className='recipeGrid'>
				{randomRecipes.length > 0 ? (
					randomRecipes.map((recipe, index) => (
						<Link
							key={index}
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
								time={
									recipe.strTime ||
									'Placeholder Time'
								}
							/>
						</Link>
					))
				) : (
					<p>Loading Recipes...</p>
				)}
			</div>

			<div className='randomRecipeGenerator'>
				<h2>
					Indecisive? Try our Random Recipe
					Generator!
				</h2>
			</div>
			<div className='getRecipeButton'>
				<Link to='/randomRecipes'>
					<Button text='Get Recipe' />
				</Link>
			</div>
		</>
	);
}
