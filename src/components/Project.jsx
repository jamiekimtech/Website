import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';

const Project = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: 5 }}>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <CardMedia
        sx={{ height: 150 }}
        image="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Project;
