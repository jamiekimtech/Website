import { Avatar, Box, Button } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box pt={3} sx={{ textAlign: 'center', maxWidth: 900, p: 1 }}>
      <h1>About Jamie</h1>
      <Avatar
        alt="about"
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        sx={{ width: '40%', height: '40%', margin: 'auto', mt: 3 }}
      />
      <h3>
        {' '}
        Hi there! <br />
        I'm a self-taught software developer who's in love with the creative
        side of programming. <br />
        Proficient in both Korean and English, with experience running a
        successful business in South Korea.
      </h3>

      <Button variant="contained">RESUME</Button>
    </Box>
  );
};

export default About;
