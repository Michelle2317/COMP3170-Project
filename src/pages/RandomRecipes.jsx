import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import ButtonRegular from '../components/Button/ButtonRegular';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export default function RandomRecipe() {
	const [randomRecipes, setRandomRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [flippedCards, setFlippedCards] = useState({});
	const [flippedOnce, setFlippedOnce] = useState({});

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

	const fetchMoreRecipes = async () => {
		setLoading(true);
		const randomData = await fetchRandomRecipes(3);
		setRandomRecipes(randomData);
		setFlippedCards({});
		setFlippedOnce({});
		setLoading(false);
	};

	useEffect(() => {
		fetchMoreRecipes();
	}, []);

	const handleFlip = (id, event) => {
		setFlippedCards((prev) => ({ ...prev, [id]: true }));

		if (!flippedOnce[id]) {
			playConfetti(event.target.closest('.flip-card'));
			setFlippedOnce((prev) => ({ ...prev, [id]: true }));
		}
	};

	const playConfetti = (cardElement) => {
		if (!cardElement) return;

		const rect = cardElement.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;

		confetti({
			particleCount: 100,
			spread: 70,
			origin: {
				x: x / window.innerWidth,
				y: y / window.innerHeight,
			},
		});
	};

	return (
		<>
			<h1 className='PageHeading'>Random Recipes</h1>
			<div className='RandomRecipeListLayout'>
				{loading ? (
					<div>Loading Recipes...</div>
				) : (
					<div className='recipeGrid'>
						{randomRecipes.map((recipe) => (
							<div
								className={`flip-card ${
									flippedCards[
										recipe
											.idMeal
									]
										? 'flipped'
										: ''
								}`}
								key={
									recipe.idMeal
								}
								onClick={(e) =>
									handleFlip(
										recipe.idMeal,
										e
									)
								}
							>
								<div className='flip-card-inner'>
									<div className='flip-card-front'>
										<h3 className='pick-me-text'>
											Pick
											Me!
										</h3>
									</div>
									<Link
										className='flip-card-back'
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
												'No time specified'
											}
											id={
												recipe.idMeal
											}
										/>
									</Link>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			<div className='generateButton'>
				<ButtonRegular
					text='Discover Recipes'
					onClick={fetchMoreRecipes}
				/>
			</div>
			<p className='instruction'>
				Click on a recipe card to reveal more details
				and click the "Generate" button to load more
				random recipe cards.
			</p>
		</>
	);
}
