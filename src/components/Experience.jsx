import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const Experience = () => {
  return (
    <>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        sx={{ maxWidth: 900 }}
        fontFamily="Bakersville"
      >
        <Grid item key={1} xs={12} md={6}>
          <Typography
            sx={{ lineHeight: 1.2, mt: 0.8 }}
            fontSize={25}
            variant="h6"
          >
            Front-end Developer
          </Typography>
          <Typography sx={{ width: '90%', lineHeight: 1.4, color: 'gray' }}>
            InZernet Technologies (IZT)
          </Typography>
          <Typography sx={{ width: '90%', lineHeight: 1.4 }}>
            Aug. 2023 – Present
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
