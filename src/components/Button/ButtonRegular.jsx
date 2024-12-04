import styles from './ButtonRegular.module.css';

export default function ButtonRegular({ text, onClick, className }) {
	return (
		<button
			className={`${styles.buttonRegular} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
