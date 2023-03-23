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

const Project1 = () => {
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
          Portfolio Website
        </Typography>
        <CardMedia
          sx={{ height: 150 }}
          image="https://cdn.pixabay.com/photo/2023/03/17/11/27/dog-7858450_640.jpg"
          title="portfolio website"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Website to showcase projects and certificates. <br />
            Tools: React, MUI, JavaScript, HTML, CSS
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://github.com/jamiekimtech/Website" size="small">
            Github Code
          </Button>
          <Button size="small">
            Demo <LaunchIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Project1;
