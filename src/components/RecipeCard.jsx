import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function RecipeCard({ title, description, image, className}) {
  return (
    <Card className={className} sx={{ maxWidth: 310 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={image}          
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">{description}</Typography>
          <Typography variant="h6" sx={{ color: 'var(--black)' }}>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
