// TableComponent.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TableComponent({ btc, people }) {
    const values = [50000, 60000, 70000, 80000, 90000, 100000];

    return (
        <TableContainer component={Paper} sx={{ width: '75%', minWidth: 450, margin: '0 auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Valor de BTC en $</TableCell>
                        <TableCell>A Recibir en $</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {values.map((value) => (
                        <TableRow key={value}>
                            <TableCell>{value}</TableCell>
                            <TableCell>{((btc * value) / people).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;
