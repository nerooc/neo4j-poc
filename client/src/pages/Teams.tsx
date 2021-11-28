import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { getAllTeams } from '../api';

import { TeamTable, NewTeam } from '../components';
import { ITeam } from '../types';

export const Teams = () => {
  const [teams, setTeams] = React.useState<ITeam[]>();

  const getTeams = async () => {
    const { data } = await getAllTeams();
    setTeams(data);
  };

  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <Box display='flex'>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          Teams
        </Typography>
        <TeamTable teams={teams!} getTeams={() => getTeams()} />
      </Box>
      <Box sx={{ width: '50%', margin: '50px', textAlign: 'left' }}>
        <Typography
          variant='h3'
          component='h3'
          sx={{ flexGrow: 1, margin: '20px 0' }}
        >
          New team
        </Typography>
        <NewTeam getTeams={() => getTeams()} />
      </Box>
    </Box>
  );
};
