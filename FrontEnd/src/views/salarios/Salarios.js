import React from 'react';
import { Box, Grid } from '@mui/material';
import GridSalarios from '../../components/sample/Salarios/gridSalarios';
import { SalariosTableProvider } from '../../components/sample/Salarios/salariosContext';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Salarios',
  },
];

const Salarios = () => {
  return (
    <SalariosTableProvider>
        <Box>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={15}>
                <GridSalarios />
            </Grid>
            </Grid>
        </Box>
    </SalariosTableProvider>
  );
};

export default Salarios;
