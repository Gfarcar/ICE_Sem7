import React from 'react';
import { useFormik } from 'formik';
import { Box, Grid } from '@mui/material';
import GridEmpleados from '../../components/sample/HorasTrabajadas/gridHorasTrabajadas';
import InfoForm  from '../../components/forms/theme-elements/InfoForm';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Productos',
  },
];

const Info = () => {
  return (
   
    
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={15}>
                          <InfoForm />
                        </Grid>
                        
                        </Grid>
                    </Box>
  );
};

export default Info;
