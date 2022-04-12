import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageReservation = () => {
    const [reservationData, setReservationData] = useState([])
    const [approveId, setApproveId] = useState('');
    useEffect(() => {
        fetch('https://blooming-wave-11730.herokuapp.com/booktable')
            .then(res => res.json())
            .then(data => setReservationData(data));
    }, [approveId])
    

    //handle delete
    const handleDelete = (id) => {
        setApproveId(id);
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://blooming-wave-11730.herokuapp.com/booktable/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = reservationData.filter(user => user._id !== id);
                        setReservationData(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }
    return (
        <div>
            <h2 className='mb-4 mt-2' style={{color:'white', fontSize:'30px'}}>Manage All Reservation</h2>
            <Container>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Your Name</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Number Of People</TableCell>
                            <TableCell align="center">Date/Time</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservationData.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.yourName}</TableCell>
                                <TableCell align="center">{row.phoneNumber}</TableCell>
                                <TableCell align="center">{row.numberOfPeople}</TableCell>
                                <TableCell align="center">{row.dateTime}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleDelete(row._id)} className="button-1">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    );
};

export default ManageReservation;