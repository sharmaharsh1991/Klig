import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import background from "../assets/images/signup-bg.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { ReactComponent as Curve } from "../assets/images/curve.svg";
import Divider from "@mui/material/Divider";
import { ReactComponent as Google } from "../assets/images/google-icon.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook-icon.svg";
import { ReactComponent as Twitter } from "../assets/images/twitter-icon.svg";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Logo from "../assets/images/logo-dark.png";

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "name",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "createPassword",
    label: "Create Password",
    type: "password",
    autoComplete: "new-password",
    inputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <RemoveRedEyeOutlinedIcon
            sx={{
              fontSize: 20,
            }}
          />
        </InputAdornment>
      ),
    },
  },
];

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { sm: "center" },
        height: "100vh",
        overflowY: "auto",
        py: 3,
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            margin: "-1px",
            "& svg": {
              width: "100%",
              display: "block",
            },
          }}
        >
          <Curve />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            textAlign: "center",
            p: { xs: "0 25px 25px 25px", sm: "0 50px 50px 50px" },
            borderRadius: "0 0 20px 20px",
          }}
        >
          <Box
            component="img"
            className="logo"
            sx={{
              maxWidth: "100%",
              mb:1
            }}
            src={Logo}
            alt="Logo"
          />

          <Typography
            component="h4"
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {formFields.map((field) => (
                <Grid item xs={12} key={field.name}>
                  <TextField
                    autoComplete={field.autoComplete}
                    name={field.name}
                    fullWidth
                    id={field.name}
                    label={field.label}
                    type={field.type}
                    InputProps={field.inputProps}
                    
                    sx={{
                      'label[data-shrink="false"]': {
                       mt:"-4px"
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D8DADC",
                      },
                      "& .MuiInputBase-input": {
                        padding: '12px 12px',
                      },
                    }}
                  />
                </Grid>
              ))}
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: "left",
                }}
              >
                <FormControlLabel
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#4F5B67",
                      fontSize: 14,
                    },
                  }}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept Terms and Conditions"
                />
              </Grid>
            </Grid>

            <Divider
              sx={{
                my: 3,
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "14px",
                  color: "#9F9F9F",
                }}
              >
                or sign up with
              </Box>
            </Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Google />
              <Facebook />
              <Twitter />
            </Box>

            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#3A55AD",
                boxShadow: "none",
                mt: 3,
                mb: 2,
                py: 1.5,
                gap: 1,
              }}
            >
              Sign Up
              <ChevronRightOutlinedIcon />
            </Button>

            <Grid container justifyContent="center">
              <Grid
                item
                sx={{
                  color: "#4F5B67",
                  fontSize: 14,
                }}
              >
                Already have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: "#3A55AD",
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
