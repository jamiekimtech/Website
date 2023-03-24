import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export const PAGES = [
  { name: 'PROJECTS', link: '#projects' },
  { name: 'CERTIFICATES', link: '#certificates' },
  { name: 'ABOUT', link: '#about' }
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
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
      </Drawer>
      <IconButton
        sx={{ color: 'white' }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        {' '}
        <MenuIcon />{' '}
      </IconButton>
    </>
  );
};

export default DrawerComp;
