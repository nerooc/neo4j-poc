import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { getAllDrivers } from '../api';

import { DriverTable, NewDriver } from '../components';
import { IDriver } from '../types';

export const Drivers = () => {
  const [drivers, setDrivers] = React.useState<IDriver[]>();

  const getDrivers = async () => {
    const { data } = await getAllDrivers();
    setDrivers(data);
  };

  React.useEffect(() => {
    getDrivers();
  }, []);

  return (
    <Box display='flex'>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          Drivers
        </Typography>
        <DriverTable drivers={drivers!} getDrivers={() => getDrivers()} />
      </Box>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          New driver
        </Typography>
        <NewDriver getDrivers={() => getDrivers()} />
      </Box>
    </Box>
  );
};
