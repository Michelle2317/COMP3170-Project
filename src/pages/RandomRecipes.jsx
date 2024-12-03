import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';

export default function RandomRecipe() {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomRecipes = async (num) => {
    const fetchPromises = [];
    for (let i = 0; i < num; i++) {
      fetchPromises.push(
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => res.json())
      );
    }

    const results = await Promise.all(fetchPromises);
    return results.map((result) => result.meals[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const randomData = await fetchRandomRecipes(3); 
      setRandomRecipes(randomData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='PageHeading'>Random Recipes</h1>
      <div className='RecipeListLayout'>
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
                  time={recipe.strTime || 'No time specified'}
                  id={recipe.idMeal}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
