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

const Cert1 = () => {
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
          Coursera
          <br />
          Meta React Basics
        </Typography>
        <CardMedia
          sx={{ height: 150 }}
          image="https://i.imgur.com/jtaFw7o.jpeg"
          title="Coursera Meta React Basics"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Website to showcase projects and certificates. <br />
            Tools: React, MUI, JavaScript, HTML, CSS
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="https://www.coursera.org/account/accomplishments/certificate/WUEBFJ9GUJH3"
            size="small"
          >
            Certificate <LaunchIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cert1;
