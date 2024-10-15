import { Image } from "@mui/icons-material"

export default function RecipeDetails() {
    return (
        <>
            <div className="RecipeDetailsInfo">
                <h1>Recipe Name</h1>
                <img className="recipeDetailsImg" src="./assets/images/pasta.jpg"/>
                <h2>Decription</h2>
                <p className="recipeDesc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <h2>Ingredients</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                    <li>Vestibulum auctor dapibus neque.</li>
                </ul>
                <h3>Step 1</h3>
                <p className="recipeDesc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <h3>Step 2</h3>
                <p className="recipeDesc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <h3>Step 3</h3>
                <p className="recipeDesc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <h3>Step 4</h3>
                <p className="recipeDesc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
        </>
    )
  }