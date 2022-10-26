import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
// import Backdrop from '@mui/material/Backdrop'

import { signIn } from "../../store/actions/authAction";

import { Typography, TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Zoom } from "react-awesome-reveal";

import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const useStyle = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#000000",
    textDecoration: "none",
  },
});

const SignIn = () => {
  const classes = useStyle();
  const auth = useSelector((state) => state.auth);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    //e.preventDefault();
    dispatch(signIn(creds));

    if (!errors) {
      setCreds({
        email: "",
        password: "",
      });
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  // <div>
  //   <Backdrop
  //     sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //     open={true}>
  //     <CircularProgress color="inherit" />
  //   </Backdrop>
  // </div>

  if (auth._id) return <Navigate to="/viewimages2" />;

  return (
    <>
      <Zoom left>
        <Container component="main" maxWidth="xs">
          <form
            className={classes.formStyle}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5">Sign In</Typography>
            <TextField
              {...register("email", {
                required: "Enter email address",
              })}
              className={classes.spacing}
              id="enter-email"
              label="Enter email"
              variant="outlined"
              fullWidth
              value={creds.email}
              onChange={(e) => setCreds({ ...creds, email: e.target.value })}
              autoComplete="email"
            />
            {errors.email && (
              <Alert variant="outlined" severity="error">
                {errors.email.message}
              </Alert>
            )}
            <TextField
              {...register("password", {
                required: "Enter user password",
              })}
              className={classes.spacing}
              id="enter-password"
              label="Enter password"
              variant="outlined"
              type="password"
              fullWidth
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
              autoComplete="off"
            />
            {errors.password && (
              <Alert variant="outlined" severity="error">
                {errors.password.message}
              </Alert>
            )}
            <Button
              className={classes.spacing}
              variant="contained"
              color="primary"
              type="submit">
              Sign In
            </Button>
            <Button
              type="submit"
              className={classes.spacing}
              variant="text"
              color="primary"
              size="small">
              <Link to="/" className={classes.linkStyle}>
                OR Back to Customer
              </Link>
            </Button>
          </form>
          <div>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isSubmitting}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </Container>
      </Zoom>
    </>
  );
};

export default SignIn;
