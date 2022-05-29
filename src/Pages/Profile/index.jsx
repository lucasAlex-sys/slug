import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import User from '../../MockData/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css';

const Profile = () => {
    return (
        <div id="body">
            <Avatar id="avatar" alt={User.name} src={User.profileUrl} />
            <p id="name">{User.name}</p>
            <p id="matricula">{User.matricula}</p>
            <i id="curso">{User.curso}</i>
            <TableContainer
                id="table"
                component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Objeto</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {User.achados.sort(function (a, b) {
                            return a.status.localeCompare(b.status)
                        }).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.objeto}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default Profile;