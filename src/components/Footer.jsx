import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
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
        <Link href="https://github.com/jamiekimtech">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/jamie-kim-6924ba251/">
          <LinkedInIcon />
        </Link>
      </span>
      <p>jamiekimtech313@gmail.com</p>
    </Box>
  );
};

export default Footer;
