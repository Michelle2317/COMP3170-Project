import styles from './RecipeButton.module.css';

export default function RecipeButton({ text, onClick}) {
    return(
        <button className={styles.recipeButton} onClick={RecipeOnClick}>{text}</button>
    );
}