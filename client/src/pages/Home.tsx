import {
  FormControl,
  InputAdornment,
  InputLabel,
  FilledInput,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MixedTable } from '../components/MixedTable';

export const Home = () => {
  interface State {
    search: string;
  }

  const [values, setValues] = React.useState<State>({
    search: '',
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Box
      sx={{
        height: '100%',
        margin: '50px 200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <FormControl fullWidth variant='filled'>
          <InputLabel htmlFor='filled-adornment-search'>Search</InputLabel>
          <FilledInput
            id='filled-adornment-search'
            value={values.search}
            onChange={handleChange('search')}
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <MixedTable />
    </Box>
  );
};
