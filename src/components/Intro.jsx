import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Intro = () => {
  // Create a reference to the Box component
  const ref = useRef(null);

  // Run the animation when the component mounts
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector('.arrow'),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
      }
    );
  }, []);

  return (
    <Box
      textAlign={'center'}
      pt={7}
      ref={ref}
      sx={{ position: 'relative', zIndex: 2 }}
    >
      <h1>Jamie Kim</h1>
      <h2>Software Developer</h2>
      <br />
      <Button
        href="https://www.overleaf.com/read/ndnsmwyprbjr"
        variant="contained"
      >
        RESUME
      </Button>
      <br />
      <br />
      <p>
        Front-end Developer & Graphic Designer <br />
        Based in Detroit, Michigan.
      </p>
      <MouseIcon sx={{ mt: 1.1, fontSize: '2.5rem' }} />
      <br />
      <KeyboardDoubleArrowDownIcon
        sx={{ mt: -0.5, fontSize: '3rem' }}
        className="arrow"
      />
    </Box>
  );
};

export default Intro;
