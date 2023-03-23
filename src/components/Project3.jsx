import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Project3 = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: { xs: 600, md: 520 },
          margin: 2,
          borderRadius: 5
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Volunteer/freeCodeCamp Translator
        </Typography>
        <CardMedia
          sx={{ height: 150 }}
          image="https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_760x427.v1627670281.png"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Translate educational materials about programming from English to
            Korean for a nonprofit organization
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Project3;
