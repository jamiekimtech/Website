import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';

const certificates = [
  {
    id: 1,
    source: 'Coursera ',
    title: 'Meta React Basics',
    image: 'https://i.imgur.com/jtaFw7o.jpeg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/WUEBFJ9GUJH3'
  },
  {
    id: 2,
    source: 'freeCodeCamp',
    title: 'JS Algorithms & Data Structures',
    image: 'https://i.imgur.com/7zu5KP8.jpg',
    link: 'https://www.freecodecamp.org/certification/JamieKim/javascript-algorithms-and-data-structures'
  },
  {
    id: 3,
    source: 'freeCodeCamp',
    title: 'Responsive Web Design',
    image: 'https://i.imgur.com/Zjq7TVk.jpg',
    link: 'https://www.freecodecamp.org/certification/JamieKim/responsive-web-design'
  }
];

const Cert = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: 2000 }}
      >
        {certificates.map((cert) => (
          <Grid key={cert.id} xs={12} sm={6}>
            <Card
              sx={{
                maxWidth: { xs: 600, md: 520 },
                borderRadius: 5,
                height: 290,
                margin: 2,
                bgcolor: 'black',
                color: 'white',
                position: 'relative',
                minHeight: { xs: 100, lg: 220 }
              }}
            >
              <Typography variant="h6">{cert.title}</Typography>
              <Typography variant="h7">{cert.source}</Typography>

              <CardMedia sx={{ height: 150 }} image={cert.image} />

              <CardActions sx={{ position: 'absolute', bottom: 6, right: 3 }}>
                <Button
                  sx={{ p: 1, color: 'black', bgcolor: '#d1d1d1' }}
                  variant="contained"
                  href={cert.link}
                  size="small"
                >
                  Certificate
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cert;
