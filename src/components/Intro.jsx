import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { Box } from '@mui/material';
import React from 'react';

const Intro = () => {
  return (
    <Box bgcolor="yellow">
      <h1>Jamie Kim</h1>
      <h2>Software Developer</h2>
      <p>
        Web Developer & Graphic Designer <br />
        Based in Detroit, Michigan.
      </p>
      <MouseIcon />
      <KeyboardDoubleArrowDownIcon />
    </Box>
  );
};

export default Intro;
