import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { Box, Button } from '@mui/material';
import React from 'react';

const Intro = () => {
  return (
    <Box textAlign={'center'} pt={7}>
      <h1>Jamie Kim</h1>
      <h2>Software Developer</h2>
      <br />
      <Button
        href="https://docs.google.com/document/d/1ShoTcGOUJE_rQVk3BYw0mn4YEoimft6F5aL8UJ5Z3yA/edit?usp=sharing"
        variant="contained"
      >
        RESUME
      </Button>
      <br />
      <br />
      <p>
        Web Developer & Graphic Designer <br />
        Based in Detroit, Michigan.
      </p>
      <MouseIcon sx={{ mt: 1 }} />
      <br />
      <KeyboardDoubleArrowDownIcon sx={{ mt: -0.5 }} />
    </Box>
  );
};

export default Intro;
