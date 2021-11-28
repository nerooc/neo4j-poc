//@ts-nocheck

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ReactLoading from 'react-loading';
import { IRacetrack } from '../types';
import { deleteRacetrack } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  racetracks: IRacetrack[];
  getRacetracks: () => void;
}

export const RacetrackTable: React.FC<Props> = ({
  racetracks,
  getRacetracks,
}) => {
  const deleteRacetrackFromTable = async (id) => {
    await deleteRacetrack(id);
    toast.success('Deleting racetrack...');
    await getRacetracks();
  };

  return (
    <>
      {!racetracks ? (
        <>
          Loading
          <ReactLoading type={'bars'} color={'blue'} height={300} width={300} />
        </>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {racetracks.map((racetrack, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {racetrack.name}
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteRacetrackFromTable(racetrack._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ToastContainer />
        </TableContainer>
      )}
    </>
  );
};
