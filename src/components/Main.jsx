import { Grid } from '@mui/material';
import React from 'react';
import Project from './Project';

const Main = () => {
  return (
    <Grid container bgcolor="yellow">
      <Grid item xs={12} md={6}>
        <Project />
      </Grid>
      <Grid item xs={12} md={6}>
        <Project />
      </Grid>
    </Grid>
  );
};

export default Main;
