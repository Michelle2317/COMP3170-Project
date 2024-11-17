import '../index.css';
import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Menu,
	MenuItem,
	InputBase,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = [
	{ name: 'Recipes', path: '/recipes' },
	{ name: 'Top Picks', path: '/topPicks' },
	{ name: 'Occasions', path: '/occasions' },
	{ name: 'Add Recipe', path: '/addrecipe' },
];

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '100px',
	border: '2px solid var(--black)',
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	overflow: 'hidden',
	'&:hover': {
		backgroundColor: 'var(--light-gray)',
	},
	'&:focus-within': {
		border: '3.5px solid var(--deep-pink)',
	},
	marginRight: theme.spacing(4),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	color: 'var(--black)',
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'var(--black)',
	width: '100%',
	borderRadius: '100px',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		border: 'none',
		outline: 'none',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export default function Navbar() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
			}}
		>
			<Toolbar>
				{/* Logo */}
				<Link
					to='/home'
					style={{
						display: 'flex',
						alignItems: 'center',
						textDecoration: 'none',
						color: 'var(--black)',
					}}
				>
					<img
						src='./favicon.svg'
						alt='Logo'
						style={{
							display: {
								xs: 'none',
								md: 'flex',
							},
							height: '40px',
							marginRight: '8px',
						}}
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='#'
						sx={{
							fontFamily: "'Caveat', cursive",
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex',
							},
							fontWeight: 700,
							color: 'var(--black)',
							textDecoration: 'none',
							textTransform:
								'capitalize',
						}}
					>
						Once Upon a Meal &nbsp;
					</Typography>
				</Link>

				{/* Mobile Menu Icon */}
				<Box
					sx={{
						flexGrow: 1,
						display: {
							xs: 'flex',
							md: 'none',
						},
					}}
				>
					<IconButton
						size='large'
						aria-label='open menu'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleOpenNavMenu}
						color='var(--black)'
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: {
								xs: 'block',
								md: 'none',
							},
						}}
					>
						{pages.map((page) => (
							<MenuItem
								key={page.name}
								onClick={
									handleCloseNavMenu
								}
							>
								<Typography textAlign='center'>
									<Link
										to={
											page.path
										}
										style={{
											textDecoration:
												'none',
											color: 'inherit',
											textTransform:
												'capitalize',
										}}
									>
										{
											page.name
										}
										<Typography
											variant='h2'
											sx={{
												fontFamily: "'Caveat', cursive",
												fontWeight: 700,
												color: 'var(--black)',
												fontSize: '2rem',
												marginLeft: '0.5rem',
											}}
										>
											Once
											Upon
											a
											Meal
										</Typography>
									</Link>
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>

				{/* Mobile Logo */}
				{/* <img src={LogoNoText} alt="Logo" style={{ display: { xs: 'flex', md: 'none' }, height: '30px', marginRight: '8px' }} /> */}
				<Typography
					variant='h5'
					noWrap
					component='a'
					href='#'
					sx={{
						mr: 2,
						display: {
							xs: 'flex',
							md: 'none',
						},
						flexGrow: 1,
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'var(--black)',
						textDecoration: 'none',
						textTransform: 'capitalize',
					}}
				></Typography>

				{/* Desktop Menu */}
				<Box
					sx={{
						flexGrow: 1,
						display: {
							xs: 'none',
							md: 'flex',
						},
					}}
				>
					{pages.map((page) => (
						<Button
							key={page.name}
							sx={{
								my: 2,
								px: 2,
								py: 0.5,
								color: 'var(--black)',
								display: 'block',
								textTransform:
									'capitalize',
								fontSize: 'var(--h6)',
								'&:hover': {
									color: 'var(--white)',
									backgroundColor:
										'var(--deep-pink)',
								},
							}}
						>
							<Link
								to={page.path}
								style={{
									textDecoration:
										'none',
									color: 'inherit',
								}}
							>
								{page.name}
							</Link>
						</Button>
					))}
				</Box>

				{/* Search Bar */}
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{
							'aria-label': 'search',
						}}
					/>
				</Search>

				{/* Profile Icon */}
				<Box sx={{ flexGrow: 0 }}>
					<Link to='/profile'>
						<IconButton
							sx={{
								p: 0,
								'&:hover .MuiSvgIcon-root':
									{
										color: 'var(--deep-pink)',
									},
							}}
						>
							<AccountCircleIcon
								sx={{
									color: 'var(--black)',
								}}
								fontSize='large'
							/>
						</IconButton>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
