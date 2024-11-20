import RecipeCard from '../components/RecipeCard';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Recipes() {
	const [allRecipes, setAllRecipes] = useState([]);
	const [randomRecipes, setRandomRecipes] = useState([]);
	const [recommendedRecipes, setRecommendedRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [strArea, setStrArea] = useState([])
	const [strCategory, setStrCategory] = useState([]);
	const [filteredArea, setFilteredArea] = useState([]);
	const [filteredCategories, setFilteredCategories] = useState([]);
	const [showRandom, setShowRandom] = useState(true);
	const [filteredTime, setFilteredTime] = useState([]);


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

	async function fetchAllRecipes() {
		setLoading(true);
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const allRecipesData = [];
		for (const letter of alphabet) {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
			const data = await response.json();
			if (data.meals) {
				allRecipesData.push(...data.meals);
			}
		}
		setAllRecipes(allRecipesData);
		setLoading(false);
	}

	const fetchAreas = async () => {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
		const data = await response.json();
		setStrArea(data.meals);
	};

	const fetchCategories = async () => {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
		const data = await response.json();
		setStrCategory(data.meals);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const [randomData, recommendedData] = await Promise.all([
				fetchRandomRecipes(9),
				fetchRandomRecipes(3),
				]);

			setRandomRecipes(randomData);
			setRecommendedRecipes(recommendedData);
			setLoading(false);
		};

		fetchData();
		fetchAllRecipes();
		fetchAreas();
		fetchCategories();
	}, []);

	const filterByTime = (recipes) => {
        if (filteredTime.length === 0) return recipes;

        return recipes.filter((recipe) => {
            const time = recipe.strTime ? parseInt(recipe.strTime.split(' ')[0]) : null;
            if (!time) return false;

            if (filteredTime.includes('under30') && time < 30) return true;
            if (filteredTime.includes('30to60') && time >= 30 && time <= 60) return true;
            if (filteredTime.includes('60to120') && time > 60 && time <= 120) return true;
            if (filteredTime.includes('120to180') && time > 120 && time <= 180) return true;
            if (filteredTime.includes('over180') && time > 180) return true;

            return false;
        });
    };

	const filterRecipes = (recipes) => {
		const filteredByArea = filteredArea.length === 0 ? recipes : recipes.filter((recipe) => filteredArea.includes(recipe.strArea));
	
		const filteredByCategory = filteredCategories.length === 0 ? filteredByArea : filteredByArea.filter((recipe) => filteredCategories.includes(recipe.strCategory));
	
		const filteredByTime = filterByTime(filteredByCategory);

		return filteredByTime;
	};

	const handleAreaChange = (event) => {
		const value = event.target.value;
		setFilteredArea((prevSelectedArea) => {
		if (prevSelectedArea.includes(value)) {
			return prevSelectedArea.filter((area) => area !== value);
		} else {
			return [...prevSelectedArea, value];
		}
		});
		setShowRandom(false);
	};
	
	const handleCategoryChange = (event) => {
		const value = event.target.value;
		setFilteredCategories((prevSelectedCategories) => {
		if (prevSelectedCategories.includes(value)) {
			return prevSelectedCategories.filter((category) => category !== value);
		} else {
			return [...prevSelectedCategories, value];
		}
		});
		setShowRandom(false);
	};
	
	// const handleTimeChange = (event) => {
	// 	const value = event.target.value;
	// 	setFilteredTime((prevSelectedTime) => {
	// 	if (prevSelectedTime.includes(value)) {
	// 		return prevSelectedTime.filter((time) => time !== value);
	// 	} else {
	// 		return [...prevSelectedTime, value];
	// 	}
	// 	});
	// 	setShowRandom(false);
	// };

	return (
		<>
			<h1 className='PageHeading'>Recipes</h1>
			<div className='RecipeListLayout'>
				<div className='Filter'>
					<h2 className='FilterText'>Filter:</h2>
					<details className='filterDetails'>
						<summary className='filterSummary'>
							Cuisine
						</summary>
						<FormGroup className="filterGroup">
							{strArea.map((area) => (
								<FormControlLabel
									key={area.strArea}
									control={
										<Checkbox
											value={area.strArea}
											onChange={handleAreaChange}
											checked={filteredArea.includes(area.strArea)}
										/>
									}
									label={area.strArea}
									className="checkBox"
								/>
							))}
						</FormGroup>
					</details>
					<details className='filterDetails'>
						<summary className='filterSummary'>Category</summary>
						<FormGroup className="filterGroup">
						{strCategory.map((category) => (
							<FormControlLabel
							key={category.strCategory}
							control={
								<Checkbox
								value={category.strCategory}
								onChange={handleCategoryChange}
								checked={filteredCategories.includes(category.strCategory)}
								/>
							}
							label={category.strCategory}
							className="checkBox"
							/>
						))}
						</FormGroup>
					</details>

					{/* when time is available */}
					{/* <details className='filterDetails'>
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
					</details> */}
				</div>

				{showRandom && (
					<div className="RandomRecipes">
						<h2>Recipes:</h2>
						{loading ? (
						<div>Loading Recipes...</div>
						) : (
						<div className="recipeGrid">
							{randomRecipes.map((recipe) => (
							<Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
								<RecipeCard
								title={recipe.strMeal}
								category={recipe.strCategory}
								image={recipe.strMealThumb}
								className="recipe-card"
								time={recipe.strTime || 'No time specified'}
								/>
							</Link>
							))}
						</div>
						)}
					</div>
				)}

				{!showRandom && (
					<div className="AllRecipes">
						<h2>Recipes:</h2>
						{loading ? (
						<div>Loading Recipes...</div>
						) : (
						<div className="recipeGrid">
							{filterRecipes(allRecipes).map((recipe) => (
							<Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
								<RecipeCard
								title={recipe.strMeal}
								category={recipe.strCategory}
								image={recipe.strMealThumb}
								className="recipe-card"
								time={recipe.strTime || 'No time specified'}
								/>
							</Link>
							))}
						</div>
						)}
					</div>
				)}

				<div className='RecommendedRecipes'>
					<h3>Recommended Recipes:</h3>
					{recommendedRecipes.map(
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
						)}
				</div>
			</div>
		</>
	);
}
