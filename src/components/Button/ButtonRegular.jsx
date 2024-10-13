import styles from './ButtonRegular.module.css';

export default function ButtonRegular({ text, onClick }) {
        return (
            <button className={styles.buttonRegular} onClick={onClick}>{text}</button>
        );
}