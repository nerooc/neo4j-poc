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
import { ITeam } from '../types';
import { deleteTeam } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

interface Props {
  teams: ITeam[];
  getTeams: () => void;
}

export const TeamTable: React.FC<Props> = ({ teams, getTeams }) => {
  const deleteTeamFromTable = async (id) => {
    await deleteTeam(id);
    toast.success('Deleting team...');
    await getTeams();
  };

  return (
    <>
      {!teams ? (
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
              {teams.map((team, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <Link to={"/team/" + team._id}>
                      {team.name}
                    </Link>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteTeamFromTable(team._id)}
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
