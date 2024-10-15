import RecipeCard from "../components/RecipeCard"

export default function Recipes() {
	return (
                <>
                        <h1>Recipes</h1>
                        <RecipeCard
                                title="Pasta"
                                description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                                image="./assets/images/pasta.jpg"
                                className="recipe-card"
                        />
                        <RecipeCard
                                title="Pasta"
                                description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                                image="./assets/images/pasta.jpg"
                                className="recipe-card"
                                />
                        </>
        )
}
