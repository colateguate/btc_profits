// App.js
import React, { useState } from 'react';
import { CssBaseline, Container, Box, ThemeProvider, createTheme } from '@mui/material';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

const theme = createTheme({
  palette: {
    background: {
      default: '#87ceeb'  // color azul cielo
    }
  }
});

function App() {
  const [btc, setBtc] = useState(null);
  const [people, setPeople] = useState(null);

  const handleSubmit = ({ btc, people }) => {
    setBtc(btc);
    setPeople(people);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          bgcolor="white"
          borderRadius="5px"
          boxShadow="0 0 10px rgba(0,0,0,0.15)"
          padding="2rem 0" // padding vertical
          m={2}
        >
          <FormComponent onSubmit={handleSubmit} />
          {btc !== null && people !== null && <TableComponent btc={btc} people={people} />}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
