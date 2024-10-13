import { Box, Typography, Link, Grid } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'var(--light-gray)', width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '15rem' }}>
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} sm={4}>
            <Link href="/home" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <AdbIcon sx={{ fontSize: 45, color: 'var(--deep-pink)' }} />
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
            <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
              <Grid item xs={6}>
                <Link href="/home" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Home</Link>
                <Link href="/recipes" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Recipes</Link>
                <Link href="/breakfast" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Breakfast</Link>
                <Link href="/lunch" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Lunch</Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="/dinner" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Dinner</Link>
                <Link href="/cuisines" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Cuisines</Link>
                <Link href="/addrecipe" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Add Recipe</Link>
                <Link href="/profile" sx={{ display: 'block', textDecoration: 'none', color: 'inherit', margin: '0.2rem 0', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>Profile</Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us On</Typography>
            <Box display="flex" justifyContent="flex-start" gap={2} sx={{ marginTop: '0.5rem' }}>
              <Link href="#instagram" color="text.primary" sx={{ display: 'flex', alignItems: 'center', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>
                <InstagramIcon />
              </Link>
              <Link href="#facebook" color="text.primary" sx={{ display: 'flex', alignItems: 'center', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>
                <FacebookIcon />
              </Link>
              <Link href="#twitter" color="text.primary" sx={{ display: 'flex', alignItems: 'center', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>
                <TwitterIcon />
              </Link>
              <Link href="#linkedin" color="text.primary" sx={{ display: 'flex', alignItems: 'center', '&:hover': { color: 'var(--deep-pink)' }, '&:active': { color: 'var(--brown-gray)' } }}>
                <LinkedInIcon />
              </Link>
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
