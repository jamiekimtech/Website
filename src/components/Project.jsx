import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const Project = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: 5 }}>
      <Typography gutterBottom variant="h5" component="div">
        Currency Ticker with Dark/Light Mode
      </Typography>
      <CardMedia
        sx={{ height: 150 }}
        image="https://i.imgur.com/Zw3JBB4.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A web application that displays daily currency rates between the
          Korean won (KRW) and the United States dollar (USD) using an API.
          Users can toggle a dark/light mode with the moon/sun buttons.
          Languages: JavaScript, HTML, CSS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Code</Button>
        <Button size="small">Demo</Button>
      </CardActions>
    </Card>
  );
};

export default Project;
