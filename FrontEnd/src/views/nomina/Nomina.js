import React from 'react';
import { Box, Grid } from '@mui/material';
import GridNomina from '../../components/sample/Nomina/gridNomina';
import { NominaTableProvider } from '../../components/sample/Nomina/nominaTable';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Nomina',
  },
];

const Nomina = () => {
  return (
    <NominaTableProvider>
        <Box>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={15}>
                <GridNomina />
            </Grid>
            </Grid>
        </Box>
    </NominaTableProvider>
  );
};

export default Nomina;