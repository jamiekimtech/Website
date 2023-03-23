import HouseboatIcon from '@mui/icons-material/Houseboat';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import DrawerComp from './DrawerComp';

const PAGES = ['Projects', 'About', 'Contact'];

const Navbar = () => {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);
  return (
    <AppBar sx={{ background: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMatch ? (
          <>
            <Typography sx={{ display: 'flex', fontSize: '1.1rem' }}>
              JK <HouseboatIcon />
            </Typography>

            <DrawerComp />
          </>
        ) : (
          <>
            <Typography
              sx={{
                display: 'flex',
                fontSize: '1.5rem',
                alignItems: 'center'
              }}
            >
              JamieKim <HouseboatIcon />
            </Typography>{' '}
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => {
                setValue(value);
              }}
              indicatorColor="secondary"
            >
              {PAGES.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
