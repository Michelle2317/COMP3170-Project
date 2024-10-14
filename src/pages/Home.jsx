import Button from "../components/Button/ButtonRegular"; 
import RecipeCard from "../components/RecipeCard";
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export default function Home() {
    return (
        <>
            <div className="heroContainer">
                <div className="heroText">
                    <h1>Embark on a Culinary Journey of <br />
                        <span style={{ color: 'var(--deep-pink)'}}>Discovery</span> and Sharing
                    </h1>
                    <p>Delicious meals for every occasion</p>
                    <Link to="/recipes"><Button text="Explore Recipe" /></Link>
                </div>
                <img className="heroImage" src="./assets/images/pasta.jpg" alt="Pesto Farfalle" />
            </div>

            <div className="shareContainer">
                <img className="shareImage" src="./assets/images/pasta.jpg" alt="Pesto Farfalle" />
                <div className="shareText">
                    <h2>Share Your <span style={{ color: 'var(--deep-pink)'}}>Recipes</span></h2>
                    <p>
                        Join our community of food lovers and share your favourite recipes! 
                        <br />
                        Showcase your dishes, inspire others, and explore a diverse collection 
                        <br />
                        of flavours from around the world.
                    </p>
                    <Link to="/addrecipe"><Button text="Add Recipe" /></Link>
                </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <h2 className="somethingNew">Try Something <span style={{ color: 'var(--deep-pink)' }}>New</span></h2>
                <MuiLink 
                    component={Link}
                    to="/recipes"
                    sx={{ 
                        textDecoration: 'none', 
                        color: 'var(--deep-pink)',
                        fontWeight: 'bold', 
                        '&:hover': { 
                            textDecoration: 'underline', 
                            color: 'var(--black)' 
                        }, 
                        '&:active': { 
                            color: 'var(--light-gray)',
                        },
                        display: 'block',
                        marginTop: '0.5rem',
                        marginLeft: '73rem'
                    }}>
                    View More
                </MuiLink>
            </div>
            
            <div className="recipeGrid">
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
                <RecipeCard
                    title="Pesto Farfalle"
                    description="Pasta"
                    image="./assets/images/pasta.jpg"
                />
            </div>
        </>
    )
}
