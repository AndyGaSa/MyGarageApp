import { useDispatch } from "react-redux";

import styled from "styled-components";

import { useFormik } from "formik";
import * as yup from "yup";
export interface CreateFormInterface {}

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarRentalRoundedIcon from '@mui/icons-material/CarRentalRounded';
import { Car } from "@/models";

interface FormState {
  email: string;
  password: string;
  remember: boolean;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Password should be of minimum 3 characters length")
    .required("Password is required"),
});

const StyledBox = styled(Box)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateForm: React.FC<CreateFormInterface> = () => {
  const dispatch = useDispatch();
  const theme = createTheme();

  const handleChange = (values: Car) => {
    const { name, category, company } = values;

    const data = {
      name,
      category,
      company,
    };
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleChange,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledBox>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
			<CarRentalRoundedIcon/>
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
            />
            <Button
              type="submit"
              fullWidth
              onClick={() => {
                alert("clicked");
              }}
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
