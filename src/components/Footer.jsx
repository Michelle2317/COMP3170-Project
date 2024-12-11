import { Box, Typography, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<Box
			sx={{
				padding: { xs: '1rem', md: '2rem' },
				backgroundColor: 'var(--light-gray)',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Box sx={{ width: '100%', maxWidth: '1200px' }}>
				<Grid
					container
					spacing={4}
					justifyContent='flex-start'
				>
					{/* Logo and Description Section */}
					<Grid item xs={12} sm={4}>
						<Link
							to='/home'
							style={{
								textDecoration:
									'none',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<img
								src='/favicon.svg'
								alt='Logo'
								style={{
									height: '50px',
									margin: '0.5em',
									width: 'auto',
								}}
							/>
							<Typography
								variant='h2'
								sx={{
									fontFamily: "'Caveat', cursive",
									fontWeight: 700,
									color: 'var(--black)',
									fontSize: {
										xs: '1.5rem',
										md: '2rem',
									},
									marginLeft: '0.5rem',
								}}
							>
								Once Upon a Meal
							</Typography>
						</Link>

						<Typography
							variant='body2'
							sx={{
								marginTop: '0.5rem',
								color: 'text.secondary',
								fontSize: {
									xs: '0.875rem',
									md: '1rem',
								},
							}}
						>
							Discover and share
							delicious recipes for
							every occasion. Our
							platform connects a
							community of food lovers
							who inspire each other
							through culinary
							creativity. Join us to
							explore, showcase your
							favourite recipes, and
							connect with fellow
							cooking enthusiasts!
						</Typography>
					</Grid>

					{/* Useful Links Section */}
					<Grid item xs={12} sm={4}>
						<Typography variant='h6'>
							Useful Links
						</Typography>
						<Grid
							container
							spacing={2}
							sx={{
								marginTop: '0.5rem',
							}}
						>
							<Grid item xs={6}>
								{[
									'Home',
									'Recipes',
									'Top Picks',
									'Random Recipes',
								].map(
									(
										link,
										index
									) => (
										<Link
											key={
												index
											}
											to={`/${link
												.replace(
													/\s+/g,
													''
												)
												.toLowerCase()}`}
											style={{
												textDecoration:
													'none',
											}}
										>
											<Typography
												sx={{
													color: 'var(--black)',
													margin: '0.2rem 0',
													'&:hover': {
														color: 'var(--deep-pink)',
													},
													'&:active': {
														color: 'var(--brown-gray)',
													},
												}}
											>
												{
													link
												}
											</Typography>
										</Link>
									)
								)}
							</Grid>
							<Grid item xs={6}>
								{[
									'Add Recipe',
									'Profile',
								].map(
									(
										link,
										index
									) => (
										<Link
											key={
												index
											}
											to={`/${link
												.replace(
													/\s+/g,
													''
												)
												.toLowerCase()}`}
											style={{
												textDecoration:
													'none',
											}}
										>
											<Typography
												sx={{
													color: 'var(--black)',
													margin: '0.2rem 0',
													'&:hover': {
														color: 'var(--deep-pink)',
													},
													'&:active': {
														color: 'var(--brown-gray)',
													},
												}}
											>
												{
													link
												}
											</Typography>
										</Link>
									)
								)}
							</Grid>
						</Grid>
					</Grid>

					{/* Social Media Section */}
					<Grid item xs={12} sm={4}>
						<Typography variant='h6'>
							Follow Us On
						</Typography>
						<Box
							display='flex'
							justifyContent='flex-start'
							gap={2}
							sx={{
								marginTop: '1rem',
								flexWrap: {
									xs: 'wrap',
									sm: 'nowrap',
								},
							}}
						>
							{[
								{
									href: '#instagram',
									Icon: InstagramIcon,
								},
								{
									href: '#facebook',
									Icon: FacebookIcon,
								},
								{
									href: '#twitter',
									Icon: TwitterIcon,
								},
								{
									href: '#linkedin',
									Icon: LinkedInIcon,
								},
							].map(
								(
									{
										href,
										Icon,
									},
									index
								) => (
									<a
										key={
											index
										}
										href={
											href
										}
										style={{
											textDecoration:
												'none',
										}}
									>
										<Icon
											sx={{
												color: 'var(--black)',
												fontSize: {
													xs: '1.5rem',
													md: '2rem',
												},
												'&:hover': {
													color: 'var(--deep-pink)',
												},
												'&:active': {
													color: 'var(--brown-gray)',
												},
											}}
										/>
									</a>
								)
							)}
						</Box>
					</Grid>
				</Grid>

				{/* Footer Text */}
				<Typography
					variant='body2'
					sx={{
						marginTop: '1rem',
						textAlign: 'center',
						color: 'text.primary',
						fontSize: {
							xs: '0.75rem',
							md: '1rem',
						},
					}}
				>
					© 2024 Once Upon A Meal. All rights
					reserved.
				</Typography>
			</Box>
		</Box>
	);
}
