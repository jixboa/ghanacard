import { React, useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import {
  makeStyles,
  CssBaseline,
  FormControlLabel,
  Avatar,
} from "@material-ui/core";
import Box from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/actions/todoActions";
import placeholder from "../todos/placeholder.png";

import "../todos/image.css";

const useStyle = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },

  submitButtton: {
    marginLeft: "20px",
  },
  submit: {
    marginTop: "20px",
  },
});

const AddTodo = ({ todo, setTodo }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

  const [{ alt2, src2 }, setImg2] = useState({
    src2: placeholder,
    alt2: "Upload an Image",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  const handleImg2 = (e) => {
    if (e.target.files[0]) {
      setImg2({
        src2: URL.createObjectURL(e.target.files[0]),
        alt2: e.target.files[0].name,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      {/* <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}>
        <TextField
          id="enter-todo"
          variant="outlined"
          autoFocus
          fullWidth
          label="enterTodo"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />

        <Button
          className={classes.submitButtton}
          color="primary"
          variant="contained"
          type="submit">
          <Send />
        </Button>
      </form> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Customer Details
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Customer names"
                  name="customerNames"
                  variant="outlined"
                  required
                  fullWidth
                  id="customerNames"
                  label="First name - Other names -- Surname"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="Account No."
                  name="accountNo"
                  variant="outlined"
                  required
                  fullWidth
                  id="accountNo"
                  label="Your Account Number"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="Phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="ghanaCardNo"
                  name="ghanaCardNo"
                  variant="outlined"
                  required
                  fullWidth
                  id="ghanaCardNo"
                  label="Ghana Card Number"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="dateOfBirth"
                  label="Date of birth"
                  type="date"
                  variant="outlined"
                  required
                  fullWidth
                  defaultValue="1990-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={5} style={{ marginLeft: "35px" }}>
                <div className="form__img-input-container">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    id="photo1"
                    className="visually-hidden"
                    onChange={handleImg}
                    label="Upload"
                  />
                  <label htmlFor="photo1" className="form-img__file-label">
                    {alt != "Upload an Image" ? (
                      <>
                        <Typography></Typography>
                      </>
                    ) : (
                      <>
                        <Typography style={{ marginTop: "20px" }}>
                          Front Image
                        </Typography>
                        {/* <svg
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#56ceef"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                          <circle cx="12" cy="10" r="3" />
                          <circle cx="12" cy="12" r="10" />
                        </svg> */}
                      </>
                    )}
                  </label>
                  <img
                    src={src}
                    alt={alt}
                    className="form-img__img-preview"
                    label="Upload"
                  />
                </div>
              </Grid>

              <Grid item xs={5}>
                <div className="form__img-input-container">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    id="photo2"
                    className="visually-hidden"
                    onChange={handleImg2}
                    label="Upload"
                  />
                  <label htmlFor="photo2" className="form-img__file-label">
                    {alt != "Upload an Image" ? (
                      <>
                        <Typography></Typography>
                      </>
                    ) : (
                      <>
                        <Typography style={{ marginTop: "20px" }}>
                          Back Image
                        </Typography>
                        {/* <svg
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#56ceef"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                          <circle cx="12" cy="10" r="3" />
                          <circle cx="12" cy="12" r="10" />
                        </svg> */}
                      </>
                    )}
                  </label>
                  <img
                    src={src2}
                    alt={alt2}
                    className="form-img__img-preview"
                  />
                </div>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Submit Details
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddTodo;
