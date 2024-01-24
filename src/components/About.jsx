import { Avatar, Box, Button } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 900, p: 4, lineHeight: 1.5 }}>
      <h1 id="about">About Jamie</h1>
      <Avatar
        alt="about"
        src="https://media.licdn.com/dms/image/D5603AQEVnnYhr24RhQ/profile-displayphoto-shrink_200_200/0/1684348809397?e=1711584000&v=beta&t=XK_2rLLmRdUgTzlCy_7G9qyysCzLOW-tU1j_bMl4wl8"
        sx={{ width: '40%', height: '40%', margin: 'auto', mt: 3 }}
      />
      <br />
      <h4>
        {' '}
        Hi there! <br />
        I'm a self-taught software developer who's in love with the creative
        side of programming. <br />
        Proficient in both Korean and English, with experience running a
        successful business in Seoul, South Korea.
      </h4>
      <br />
      <Button
        href="https://www.overleaf.com/read/ndnsmwyprbjr"
        variant="contained"
      >
        RESUME
      </Button>
    </Box>
  );
};

export default About;
