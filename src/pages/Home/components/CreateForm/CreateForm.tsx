import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { useFormik } from "formik";
import * as yup from "yup";
export interface CreateFormInterface {}

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";

import { Car } from "@/models";
import { addCars } from "@/redux/states/cars";
import { AppStore } from "@/redux/store";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  category: yup
    .string()
    .min(3, "Category should be of minimum 3 characters length")
    .required("Category is required"),
  company: yup
    .string()
    .min(3, "Category should be of minimum 3 characters length")
    .required("Category is required"),
});

const StyledBox = styled(Box)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateForm: React.FC<CreateFormInterface> = () => {
  const dispatch = useDispatch();
  const stateCars = useSelector((store: AppStore) => store.cars);
  const theme = createTheme();

  const handleChange = (car: Car) => {
    car.id = stateCars.length + 1;
    const newCarsList = [...stateCars, car];
    dispatch(addCars(newCarsList));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      company: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleChange,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledBox>
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <CarRentalRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            Add a new car
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="category"
              name="category"
              label="Category"
              type="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company"
              type="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
              sx={{ mb: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
            >
              Submit
            </Button>
          </Box>
        </StyledBox>
      </Container>
    </ThemeProvider>
  );
};

export default CreateForm;
