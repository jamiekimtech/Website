import LaunchIcon from '@mui/icons-material/Launch';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';

const Project2 = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: { xs: 600, md: 520 },
          margin: 2,
          borderRadius: 5,
          height: { sx: 440, md: 400 }
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Currency Ticker
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
            <br />
            Languages: JavaScript, HTML, CSS
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Github Code</Button>
          <Button size="small">
            Demo
            <LaunchIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Project2;
