import { React, useState } from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
//import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addImage } from "../../store/actions/imageAction";
//import { useNavigate } from "react-router-dom";

import FormHelperText from "@mui/material/FormHelperText";
import Alert from "@mui/material/Alert";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

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
  //const navigate = useNavigate();
  // const dispatch = useDispatch();
  //const errors = useSelector((state) => state.errors);

  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const { errors } = formState;

  //const { register, handleSubmit, errors } = useForm();

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

  const onSubmit = (data) => {
    const newCustomer = {
      ...customer,
      date: new Date(),
    };
    dispatch(addImage(newCustomer)).then(() => {
      setCustomer({
        ...customer,
        fullname: "",
        accountNo: "",
        phone: "",
        ghanacard: "",
        dateOfBirth: "",
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
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(isSubmitting);
      }, 6500);
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Div>Customer Details</Div>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("fullname", {
                    required: "Please Enter your Full name",
                    minLength: {
                      value: 3,
                      message: "Full name must have more characters",
                    },
                  })}
                  required={true}
                  autoComplete="fullname"
                  name="fullname"
                  variant="outlined"
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
                {errors.fullname && (
                  <Alert variant="outlined" severity="error">
                    {errors.fullname.message}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("accountNo", {
                    required: "Please Enter your Account Number here",
                    minLength: {
                      value: 10,
                      message:
                        "Account number cannot be less than ten characters",
                    },
                  })}
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
                {errors.accountNo && (
                  <Alert variant="outlined" severity="error">
                    {errors.accountNo.message}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("phone", {
                    required: "Please Enter your Phone number here",
                    minLength: {
                      value: 9,
                      message: "Phone number must be at least 9 charactors",
                    },
                  })}
                  autoComplete="Phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  type={"tel"}
                  label="Phone Number"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <Alert variant="outlined" severity="error">
                    {errors.phone.message}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("ghanacard", {
                    required: "Please Enter your Ghana card number here",
                    minLength: {
                      value: 10,
                      message:
                        "Ghana card number must be at least 10 charactors",
                    },
                  })}
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
                {errors.ghanacard && (
                  <Alert variant="outlined" severity="error">
                    {errors.ghanacard.message}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("dateOfBirth", {
                    required: "Reselect your Date of Birth",
                  })}
                  name="dateOfBirth"
                  id="date"
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
                {customer.dateOfBirth === "" && (
                  <Alert variant="outlined" severity="info">
                    Reselect your Date of Birth
                  </Alert>
                )}
                {errors.dateOfBirth && (
                  <FormHelperText error>
                    {errors.dateOfBirth.message}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>

            <Grid
              style={{ marginTop: "20px" }}
              container
              rowspacing={1}
              columnspacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>
                  <div className="form__img-input-container">
                    <input
                      {...register("image1", {
                        required:
                          "Select Front picture of your Ghana card here",
                      })}
                      name="image1"
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
                          {errors.image1 && (
                            <FormHelperText
                              error
                              style={{ marginLeft: "12px" }}>
                              {errors.image1.message}
                            </FormHelperText>
                          )}
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
                      {...register("image2", {
                        required: "Select Back picture of your Ghana card here",
                      })}
                      name="image2"
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
                          {errors.image2 && (
                            <FormHelperText
                              error
                              style={{ marginLeft: "12px" }}>
                              {errors.image2.message}
                            </FormHelperText>
                          )}
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
                      {...register("image3", {
                        required: "Click here to Select or Take new Selfie",
                      })}
                      name="image3"
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
                          {errors.image3 && (
                            <FormHelperText
                              error
                              style={{ marginLeft: "12px" }}>
                              {errors.image3.message}
                            </FormHelperText>
                          )}
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

            <LoadingButton
              style={{ marginTop: "20px" }}
              size="large"
              onClick={handleSubmit(onSubmit)}
              endIcon={<SendIcon />}
              loading={isSubmitting}
              loadingPosition="end"
              variant="contained">
              Submit
            </LoadingButton>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddTodo;
