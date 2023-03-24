import { Box, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import Cert from './Cert';

import Project from './Project';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Slab', 'serif'].join(',')
  }
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="#333232" align="center" paddingTop={1}>
        <Box mt={2}>
          <h1 id="projects">/ Projects</h1>
          <br />
          <Project />
        </Box>

        <Box mt={6}>
          <h1 id="certificates">/ Certificates</h1>
          <br />
          <Cert />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Main;
