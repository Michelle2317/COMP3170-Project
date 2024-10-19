import { Box, Typography, Grid } from '@mui/material';
// import AdbIcon from '@mui/icons-material/Adb';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

import LogoNoText from './LogoNoText.svg';

export default function Footer() {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'var(--light-gray)', width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '15rem' }}>
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} sm={4}>
          <Link to="/home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={LogoNoText} alt="Logo" style={{ display: { xs: 'none' }, height: '50px', margin: "0.5em" }} />
            <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 700,
                  color: 'var(--black)',
                  fontSize: '2rem', 
                  marginLeft: '0.5rem'
                }}
              >
                Once Upon a Meal
            </Typography>
          </Link>

            <Typography variant="body2" sx={{ marginTop: '0.5rem', color: 'text.secondary' }}>
              Discover and share delicious recipes for every occasion.
              Our platform connects a community of food lovers who inspire 
              each other through culinary creativity. Join us to explore, 
              showcase your favourite recipes, and connect <br />with fellow cooking enthusiasts!
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Useful Links</Typography>
            <Grid container spacing={2} sx={{ marginTop: '0rem' }}>
              <Grid item xs={6}>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link to="/recipes" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Recipes
                  </Typography>
                </Link>
                <Link to="/breakfast" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Breakfast
                  </Typography>
                </Link>
                <Link to="/lunch" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Lunch
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/dinner" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Dinner
                  </Typography>
                </Link>
                <Link to="/cuisines" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Cuisines
                  </Typography>
                </Link>
                <Link to="/addrecipe" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Add Recipe
                  </Typography>
                </Link>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      color: 'var(--black)',
                      margin: '0.2rem 0',
                      '&:hover': { color: 'var(--deep-pink)' },
                      '&:active': { color: 'var(--brown-gray)' }
                    }}
                  >
                    Profile
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us On</Typography>
            <Box display="flex" justifyContent="flex-start" gap={2} sx={{ marginTop: '1.5rem' }}>
              <a
                href="#instagram"
                style={{ textDecoration: 'none' }}
              >
                <InstagramIcon
                  sx={{
                    color: 'var(--black)',
                    '&:hover': { color: 'var(--deep-pink)' },
                    '&:active': { color: 'var(--brown-gray)' }
                  }}
                />
              </a>
              <a
                href="#facebook"
                style={{ textDecoration: 'none' }}
              >
                <FacebookIcon
                  sx={{
                    color: 'var(--black)',
                    '&:hover': { color: 'var(--deep-pink)' },
                    '&:active': { color: 'var(--brown-gray)' }
                  }}
                />
              </a>
              <a
                href="#twitter"
                style={{ textDecoration: 'none' }}
              >
                <TwitterIcon
                  sx={{
                    color: 'var(--black)',
                    '&:hover': { color: 'var(--deep-pink)' },
                    '&:active': { color: 'var(--brown-gray)' }
                  }}
                />
              </a>
              <a
                href="#linkedin"
                style={{ textDecoration: 'none' }}
              >
                <LinkedInIcon
                  sx={{
                    color: 'var(--black)',
                    '&:hover': { color: 'var(--deep-pink)' },
                    '&:active': { color: 'var(--brown-gray)' }
                  }}
                />
              </a>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ marginTop: '1rem', textAlign: 'left', color: 'text.primary' }}>
          © 2024 Once Upon A Meal. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
