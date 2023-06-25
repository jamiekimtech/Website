import { Avatar, Box, Button } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 900, p: 4, lineHeight: 1.5 }}>
      <h1 id="about">About Jamie</h1>
      <Avatar
        alt="about"
        src="https://avatars.githubusercontent.com/u/114262745?v=4"
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
        href="https://docs.google.com/document/d/1ShoTcGOUJE_rQVk3BYw0mn4YEoimft6F5aL8UJ5Z3yA/edit?usp=sharing"
        variant="contained"
      >
        RESUME
      </Button>
    </Box>
  );
};

export default About;
