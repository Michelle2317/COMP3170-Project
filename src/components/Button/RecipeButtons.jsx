import styles from './RecipeButton.module.css';

export default function RecipeButton({ text, onClick, Icon }) {
    return (
        <button className={styles.recipeButton} onClick={onClick}>
            {Icon && <Icon className={styles.icon} />} {text}
        </button>
    );
}