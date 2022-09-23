import { React, useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//import { useDispatch } from "react-redux";
//import { addTodo, updateTodo } from "../../store/actions/todoActions";
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
  // const dispatch = useDispatch();

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

  return (
    <>
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
                    {alt !== "Upload an Image" ? (
                      <>
                        <Typography></Typography>
                      </>
                    ) : (
                      <>
                        <Typography style={{ marginTop: "20px" }}>
                          Front Image
                        </Typography>
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
                    {alt !== "Upload an Image" ? (
                      <>
                        <Typography></Typography>
                      </>
                    ) : (
                      <>
                        <Typography style={{ marginTop: "20px" }}>
                          Back Image
                        </Typography>
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
