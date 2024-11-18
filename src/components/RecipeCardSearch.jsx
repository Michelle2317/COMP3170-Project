import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

export default function RecipeCardSearch({
	title,
	category,
	image,
	className,
	time,
	id,
}) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/recipe/${id}`);
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
						{time}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
