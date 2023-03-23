import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { Box, Button } from '@mui/material';
import React from 'react';

const Intro = () => {
  return (
    <Box textAlign={'center'} pt={10}>
      <h1>Jamie Kim</h1>
      <h2>Software Developer</h2>
      <Button variant="contained">RESUME</Button>
      <p>
        Web Developer & Graphic Designer <br />
        Based in Detroit, Michigan.
      </p>
      <MouseIcon />
      <br />
      <KeyboardDoubleArrowDownIcon />
    </Box>
  );
};

export default Intro;
