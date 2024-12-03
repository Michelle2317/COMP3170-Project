import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RecipeCard({
	title,
	category,
	image,
	className,
	time,
	id,
}) {
	const navigate = useNavigate();
	const location = useLocation();
	const handleClick = () => {
		if (
			location.pathname === '/topPicks' ||
			location.pathname === '/home' ||
			location.pathname === '/recipes' ||
			location.pathname === '/occasions'
		) {
			if (id) {
				navigate(`/recipe/${id}`);
			}
		} else if (location.pathname.startsWith('/recipe')) {
			if (location.pathname.includes('/topPicks')) {
				navigate('/topPicks');
			} else if (location.pathname.includes('/recipes')) {
				navigate('/recipes');
			} else if (location.pathname.includes('/occasions')) {
				navigate('/occasions');
			} else {
				navigate('/home');
			}
		} else {
			console.error(
				'Unexpected location:',
				location.pathname
			);
			navigate('/');
		}
	};

	return (
		<Card
			className={className}
			sx={{ maxWidth: 310 }}
			onClick={handleClick}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					height='190'
					image={image}
					alt={title}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='p'
						component='div'
					>
						{category}
					</Typography>
					<Typography
						variant='h6'
						sx={{ color: 'var(--black)' }}
					>
						{title}
					</Typography>
					<Typography
						variant='p'
						sx={{ color: 'var(--gray)' }}
					>
						{/* {time} */} 
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
