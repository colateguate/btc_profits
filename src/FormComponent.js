// FormComponent.js
import React, { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@mui/material';

function FormComponent({ onSubmit }) {
    const [btc, setBtc] = useState('');
    const [people, setPeople] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ btc, people });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
        >
            <TextField
                type="number"
                value={btc}
                onChange={(e) => setBtc(e.target.value)}
                label="Cantidad de BTC"
                required
            />
            <InputLabel id="people-select-label">Cantidad de personas</InputLabel>
            <Select
                labelId="people-select-label"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                required
            >
                <MenuItem value={4}>4 - Equipos</MenuItem>
                <MenuItem value={8}>8 - Personas</MenuItem>
            </Select>
            <Button type="submit" variant="contained">Calcular</Button>
        </Box>
    );
}

export default FormComponent;
