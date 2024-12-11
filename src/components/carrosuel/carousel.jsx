import { useState, useEffect } from 'react';
import '../carrosuel/carousel.css';

const Carousel = () => {
	const images = [
		'./assets/images/dishOne.jpg',
		'./assets/images/dishTwo.jpg',
		'./assets/images/dishThree.jpg',
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % images.length
			);
		}, 10000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className='carousel-container'>
			<img
				src={images[currentImageIndex]}
				alt={`Carousel Image ${currentImageIndex + 1}`}
				className='carousel-image'
			/>
			<div className='carousel-indicators'>
				{images.map((_, index) => (
					<span
						key={index}
						className={`indicator ${
							index ===
							currentImageIndex
								? 'active'
								: ''
						}`}
						onClick={() =>
							setCurrentImageIndex(
								index
							)
						}
					></span>
				))}
			</div>
		</div>
	);
};

export default Carousel;
