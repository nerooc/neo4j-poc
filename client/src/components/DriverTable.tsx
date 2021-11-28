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
import { IDriver } from '../types';
import { deleteDriver } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  drivers: IDriver[];
  getDrivers: () => void;
}

export const DriverTable: React.FC<Props> = ({ drivers, getDrivers }) => {
  const deleteDriverFromTable = async (id) => {
    await deleteDriver(id);
    toast.success('Deleting driver...');
    await getDrivers();
  };

  return (
    <>
      {!drivers ? (
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
                <TableCell align='right'>Surname</TableCell>
                <TableCell align='right'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.map((driver, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {driver.name}
                  </TableCell>
                  <TableCell align='right'>{driver.surname}</TableCell>
                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteDriverFromTable(driver._id)}
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
