import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'darkblue',
      }}
      position='static'
    >
      <img
        alt='f1-logo'
        src='https://www.racecar-engineering.com/wp-content/uploads/2018/03/F1-LOGO.png'
        height='100px'
      />
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          width: 500,
        }}
      >
        <Link to='/drivers' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Drivers
          </Typography>
        </Link>
        <Link
          to='/racetracks'
          style={{ color: 'white', textDecoration: 'none' }}
        >
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Racetracks
          </Typography>
        </Link>
        <Link to='/teams' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Teams
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
);
