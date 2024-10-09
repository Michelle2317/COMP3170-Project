import '../index.css';
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Menu, MenuItem, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = [
  { name: 'Breakfast', path: '/breakfast' },
  { name: 'Lunch', path: '/lunch' },
  { name: 'Dinner', path: '/dinner' },
  { name: 'Cuisines', path: '/cuisines' },
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
    border: '2px solid var(--rose-gold)',
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
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo */}
        <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'var(--black)' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'var(--black)' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'var(--black)',
              textDecoration: 'none',
              textTransform: 'capitalize',
            }}
          >
          </Typography>
        </Link>

        {/* Mobile Menu Icon */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="open menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="var(--black)"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit', textTransform: 'capitalize' }}>
                    {page.name}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Mobile Logo */}
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'var(--black)',
            textDecoration: 'none',
            textTransform: 'capitalize',
          }}
        >
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{
                my: 2,
                px: 2, 
                py: 0.5,
                color: 'var(--black)',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: 'var(--h6)',
                '&:hover': {
                  color: 'var(--white)',
                  backgroundColor: 'var(--rose-gold)',
                },
              }}
            >
              <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
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
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Profile Icon */}
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon sx={{ color: 'var(--black)' }} fontSize="large" />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>My Account</MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>Upload New Recipe</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
