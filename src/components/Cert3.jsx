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

const Cert3 = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: { sm: 320, md: 400 },
          margin: 2,
          borderRadius: 5,
          height: { sm: 440, md: 400 }
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          freeCodeCamp <br />
          Responsive Web Design
        </Typography>
        <CardMedia
          sx={{ height: 150 }}
          image="https://i.imgur.com/Zjq7TVk.jpg"
          title="freeCodeCamp Responsive Web Design"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Website to showcase projects and certificates. <br />
            Tools: React, MUI, JavaScript, HTML, CSS
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            Demo <LaunchIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cert3;
