import React from 'react';
import { Box, Grid } from '@mui/material';
import GridEmpleados from '../../components/sample/gridEmpleados';
import { StoreProvider } from '../../components/sample/storeContext';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Productos',
  },
];

const SamplePage = () => {
  return (
    <StoreProvider>
    
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={15}>
                          <GridEmpleados />
                        </Grid>
                        
                        </Grid>
                    </Box>
              
    </StoreProvider>
  );
};

export default SamplePage;
