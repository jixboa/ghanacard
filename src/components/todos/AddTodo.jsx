import { React, useState } from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addImage } from "../../store/actions/imageAction";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//import { useDispatch } from "react-redux";
//import { addTodo, updateTodo } from "../../store/actions/todoActions";
import placeholder from "../todos/placeholder.png";
//import FileBase64 from "react-file-base64";

import "../todos/image.css";
//import { Navigate } from "react-router-dom";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "#20b113",
  padding: theme.spacing(1),
  marginBottom: "20px",
  fontWeight: "bolder",
  color: "whitesmoke",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    color: "success",
  },
});

const AddTodo = ({ customer, setCustomer }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "",
  });

  const [{ alt2, src2 }, setImg2] = useState({
    src2: placeholder,
    alt2: "",
  });

  const [{ alt3, src3 }, setImg3] = useState({
    src3: placeholder,
    alt3: "",
  });

  const handleImg = async (e) => {
    const file = e.target.files[0];
    const base641 = await convertBase64(file);

    setImg({
      src: base641,
      alt: e.target.files[0].name,
    });
    setCustomer({
      ...customer,
      image1: base641,
    });
  };

  const handleImg2 = async (e) => {
    const file = e.target.files[0];
    const base642 = await convertBase64(file);
    setImg2({
      src2: base642,
      alt2: e.target.files[0].name,
    });
    setCustomer({
      ...customer,
      image2: base642,
    });
  };
  //encodeFileBase64(selectedFile[0]);
  const handleImg3 = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    setImg3({
      src3: base64,
      alt3: e.target.files[0].name,
    });
    setCustomer({
      ...customer,
      image3: base64,
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const FileReaders = new FileReader();
      FileReaders.readAsDataURL(file);

      FileReaders.onload = () => {
        resolve(FileReaders.result);
      };
      FileReaders.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customer.fullname) {
      const newCustomer = {
        ...customer,
        date: new Date(),
      };
      dispatch(addImage(newCustomer));
    }
    setCustomer({
      ...customer,
      fullname: "",
      accountNo: "",
      phone: "",
      ghanacard: "",
      dateOfbirth: "",
      image1: "",
      image2: "",
      image3: "",
    });

    setImg({
      src: placeholder,
      alt: "",
    });
    setImg2({
      src2: placeholder,
      alt2: "",
    });
    setImg3({
      src3: placeholder,
      alt3: "",
    });
    navigate("/");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Div>Customer Details</Div>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fullname"
                  name="fullname"
                  variant="outlined"
                  required
                  fullWidth
                  id="customerNames"
                  label="First name -- Other names -- Surname"
                  type={"text"}
                  autoFocus
                  value={customer.fullname}
                  onChange={(e) =>
                    setCustomer({ ...customer, fullname: e.target.value })
                  }
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
                  label="GAP Account Number"
                  type={"tel"}
                  value={customer.accountNo}
                  onChange={(e) =>
                    setCustomer({ ...customer, accountNo: e.target.value })
                  }
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
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="ghanaCardNo"
                  name="ghanacard"
                  variant="outlined"
                  required
                  fullWidth
                  id="ghanacard"
                  label="Ghana Card Number"
                  value={customer.ghanacard}
                  onChange={(e) =>
                    setCustomer({ ...customer, ghanacard: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="dateOfBirth"
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
                  value={customer.date}
                  onChange={(e) =>
                    setCustomer({ ...customer, dateOfBirth: e.target.value })
                  }
                />
              </Grid>
            </Grid>

            <Grid
              container
              rowspacing={1}
              columnspacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>
                  <div className="form__img-input-container">
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      id="photo1"
                      className="visually-hidden"
                      onChange={(e) => {
                        handleImg(e);
                      }}
                      label="Upload"
                    />
                    <label htmlFor="photo1" className="form-img__file-label">
                      {alt !== "" ? (
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
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <div className="form__img-input-container">
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      id="photo2"
                      className="visually-hidden"
                      onChange={(e) => {
                        handleImg2(e);
                      }}
                      label="Upload"
                    />
                    <label htmlFor="photo2" className="form-img__file-label">
                      {alt2 !== "" ? (
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
                </Item>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Item>
                  <div className="form__img-input-container">
                    {/* <FileBase64
                      multiple={false}
                      onDone={({ base64 }) =>
                        setImg3({
                          src3: base64,
                        })
                      }
                    /> */}
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      id="photo3"
                      className="visually-hidden"
                      onChange={(e) => {
                        handleImg3(e);
                      }}
                      label="Upload"
                    />
                    <label htmlFor="photo3" className="form-img__file-label">
                      {alt3 !== "" ? (
                        <>
                          <Typography></Typography>
                        </>
                      ) : (
                        <>
                          <Typography style={{ marginTop: "20px" }}>
                            Take a Selfie
                          </Typography>
                        </>
                      )}
                    </label>
                    <img
                      src={src3}
                      alt={alt3}
                      className="form-img__img-preview"
                    />
                  </div>
                </Item>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              className={classes.submit}>
              Send Details
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddTodo;
