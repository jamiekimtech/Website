import { Box, Grid } from '@mui/material';
import React from 'react';
import Cert1 from './Cert1';
import Cert2 from './Cert2';
import Cert3 from './Cert3';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const Main = () => {
  return (
    <>
      <Box bgcolor="#616161" align="center">
        <h1>Projects</h1>
        <Grid
          container
          sx={{ textAlign: 'center', maxWidth: 900 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} align="center">
            <Project1 />
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Project2 />
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Project3 />
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor="#616161" align="center">
        <h1>Certificates</h1>
        <Grid
          container
          sx={{ textAlign: 'center', maxWidth: 900 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} align="center">
            <Cert1 />
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <Cert2 />
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <Cert3 />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
