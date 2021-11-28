import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { getAllRacetracks } from '../api';

import { RacetrackTable, NewRacetrack } from '../components';
import { IRacetrack } from '../types';

export const Racetracks = () => {
  const [racetracks, setRacetracks] = React.useState<IRacetrack[]>();

  const getRacetracks = async () => {
    const { data } = await getAllRacetracks();
    setRacetracks(data);
  };

  React.useEffect(() => {
    getRacetracks();
  }, []);

  return (
    <Box display='flex'>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          Racetracks
        </Typography>
        <RacetrackTable
          racetracks={racetracks!}
          getRacetracks={() => getRacetracks()}
        />
      </Box>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          New racetrack
        </Typography>
        <NewRacetrack getRacetracks={() => getRacetracks()} />
      </Box>
    </Box>
  );
};
