import HouseboatIcon from '@mui/icons-material/Houseboat';
import {
  AppBar,
  List,
  ListItemIcon,
  ListItemText,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import DrawerComp, { PAGES } from './DrawerComp';
import ScrollIndicator from './ScrollIndicator';

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar sx={{ background: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMatch ? (
          <>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.4rem',
              }}
            >
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
                alignItems: 'center',
              }}
            >
              JamieKim <HouseboatIcon />
            </Typography>{' '}
            <Tabs>
              <List>
                {PAGES.map((page, index) => (
                  <ListItemIcon key={index}>
                    <ListItemText
                      sx={{
                        '&:hover': {
                          transform: 'scale(1.03)',
                          transition: '.2s transform ease-out',
                        },
                      }}
                    >
                      <HashLink
                        style={{
                          textDecoration: 'none',
                          margin: 10,
                          fontSize: 18,
                          color: 'white',
                        }}
                        smooth
                        to={page.link}
                      >
                        {page.name}
                      </HashLink>
                    </ListItemText>
                  </ListItemIcon>
                ))}
              </List>
            </Tabs>
          </>
        )}
      </Toolbar>
      <ScrollIndicator />
    </AppBar>
  );
};

export default Navbar;
