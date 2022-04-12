import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orderData, setOrderData] = useState([])
    const [approveId, setApproveId] = useState('');
    useEffect(() => {
        fetch('https://blooming-wave-11730.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrderData(data));
    }, [approveId])
    

    //update data pending to approved
    const handleUpdate = (id) => {
        
        const url = `https://blooming-wave-11730.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfull');
                    setApproveId(id);
            }
        })
    }

    //handle delete
    const handleDelete = (id) => {
        setApproveId(id);
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://blooming-wave-11730.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = orderData.filter(user => user._id !== id);
                        setOrderData(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }
    return (
        <div>
            <h2 className='mb-4 mt-2' style={{color:'white', fontSize:'30px'}}>Manage All Orders</h2>
            <Container>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">Food</TableCell>
                            <TableCell align="center">Date/Time</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">approval</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderData.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.yourName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.foodName}</TableCell>
                                <TableCell align="center">{row.dateTime}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleUpdate(row._id)} className="button-1">approve</Button></TableCell>
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

export default ManageAllOrders;