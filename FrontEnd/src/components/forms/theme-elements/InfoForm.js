import React, {useContext} from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Db } from '../../../guards/firebase/Firebase';
import AuthContext from '/src/guards/firebase/firebaseContext';
import DashboardCard from 'src/components/shared/DashboardCard';

const SignupForm = () => {

  const { user } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      weight: '',
      height: '',
      name: '',
      lastname: ''
    },
    onSubmit: async (values) => {

        const roleDocRef = doc(Db, 'info', user.id);
        const roleDoc = await getDoc(roleDocRef);
    

        // Calculate IMC (BMI) = weight(kg) / (height(m)^2)
        const heightInMeters = parseFloat(values.height) / 100; // Assuming height is in cm
        const IMC = (parseFloat(values.weight) / (heightInMeters * heightInMeters)).toFixed(2);

        const data = {
          weight: values.weight,
          height: values.height,
          IMC: IMC,
          name: values.name,
          lastName: values.lastname,
        };

        if (roleDoc.exists()) {
          // Update existing document
          await setDoc(roleDocRef, data, { merge: true });
          alert('Info updated successfully!');
        } else {
          // Create new document
          await setDoc(roleDocRef, data);
          alert('Info created successfully!');
        }

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
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastname"
              name="lastname"
              label="Lastname"
              variant="outlined"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </Grid>
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
