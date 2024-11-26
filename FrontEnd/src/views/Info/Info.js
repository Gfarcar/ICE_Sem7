import React from 'react';
import { useFormik } from 'formik';
import { Box, Grid } from '@mui/material';
import GridEmpleados from '../../components/sample/HorasTrabajadas/gridHorasTrabajadas';
import InfoForm  from '../../components/forms/theme-elements/InfoForm';
import InfoDisplay  from '../../components/sample/InfoDisplay/InfoDisplay';
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
                          <Grid item>
                            <InfoDisplay />
                          </Grid>
                          <Grid>
                            <InfoForm />
                          </Grid>
                        </Grid>
                        
                        
                      </Grid>
                    </Box>
  );
};

export default Info;
