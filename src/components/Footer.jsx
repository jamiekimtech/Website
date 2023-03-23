import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        p: 1,
        backgroundColor: '#616161'
      }}
    >
      <h1>Contact</h1>
      <span>
        <GitHubIcon /> <LinkedInIcon />{' '}
      </span>
      <p>jamiekimtech313@gmail.com</p>
    </Box>
  );
};

export default Footer;
