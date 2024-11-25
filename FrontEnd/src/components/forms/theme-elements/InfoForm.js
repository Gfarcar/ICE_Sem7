import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      weight: '',
      height: '',
      fat: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <DashboardCard title="Update Info">
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Update User Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="weight"
              name="weight"
              label="Weight"
              variant="outlined"
              value={formik.values.weight}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="height"
              name="height"
              label="Height"
              variant="outlined"
              value={formik.values.height}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="fat"
              name="fat"
              label="Fat %"
              variant="outlined"
              value={formik.values.fat}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </DashboardCard>
  );
};

export default SignupForm;
