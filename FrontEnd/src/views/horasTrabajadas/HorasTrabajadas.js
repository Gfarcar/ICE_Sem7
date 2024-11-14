import React from 'react';
import { Box, Grid } from '@mui/material';
import GridHorasTrabajadas from '../../components/sample/HorasTrabajadas/gridHorasTrabajadas';
import { HorasTrabajadasProvider } from '../../components/sample/HorasTrabajadas/horasTrabajadasContext';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Horas trabajadas',
  },
];

const HorasTrabajadas = () => {
  return (
    <HorasTrabajadasProvider>
        <Box>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={15}>
                <GridHorasTrabajadas />
            </Grid>
            </Grid>
        </Box>
    </HorasTrabajadasProvider>
  );
};

export default HorasTrabajadas;
