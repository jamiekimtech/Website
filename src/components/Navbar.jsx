import HouseboatIcon from '@mui/icons-material/Houseboat';
import {
  AppBar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import DrawerComp from './DrawerComp';

import { PAGES } from './DrawerComp';

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
              indicatorColor="primary"
            >
              <List>
                {PAGES.map((page, index) => (
                  <ListItemButton key={index}>
                    <ListItemIcon>
                      <ListItemText>
                        <HashLink smooth to={page.link}>
                          {page.name}
                        </HashLink>
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                ))}
              </List>
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
