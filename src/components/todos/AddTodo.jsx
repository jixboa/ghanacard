import { React, useState } from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
//import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addImage } from "../../store/actions/imageAction";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FormHelperText from "@mui/material/FormHelperText";
import Alert from "@mui/material/Alert";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

//import { useDispatch } from "react-redux";
//import { addTodo, updateTodo } from "../../store/actions/todoActions";
import placeholder from "../todos/placeholder.png";
import sending1 from "../todos/sending12.jpg";

import "../todos/image.css";
//import { addImage } from "../../store/actions/imageAction";
//import { addFile } from "../../store/actions/filesAction";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
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

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [fullname, setFullname] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [ghanacard, setGhanacard] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const { register, resetField, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const { errors } = formState;

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
    if (file.size < 510000) {
      const base641 = await convertBase64(file);

      setImg({
        src: base641,
        alt: e.target.files[0].name,
      });
      setImage1(file);
    } else {
      toast.info("Image size should not exceed 500kb", {
        position: toast.POSITION.TOP_CENTER,
      });
      resetField("image1");
    }
  };

  const handleImg2 = async (e) => {
    const file = e.target.files[0];
    if (file.size < 510000) {
      const base642 = await convertBase64(file);
      setImg2({
        src2: base642,
        alt2: e.target.files[0].name,
      });
      setImage2(file);
    } else {
      toast.info("Image size should not exceed 500kb", {
        position: toast.POSITION.TOP_CENTER,
      });
      resetField("image2");
    }
  };
  const handleImg3 = async (e) => {
    const file = e.target.files[0];

    if (file.size < 1010000) {
      const base64 = await convertBase64(file);

      setImg3({
        src3: base64,
        alt3: e.target.files[0].name,
      });
      setImage3(file);
    } else {
      toast.info("Selfie size must not exceed 1Mb", {
        position: toast.POSITION.TOP_CENTER,
      });
      resetField("image3");
    }
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
    const formData = new FormData();

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("fullname", fullname);
    formData.append("accountNo", accountNo);
    formData.append("ghanacard", ghanacard);
    formData.append("phone", phone);
    formData.append("dateOfBirth", dateOfBirth);

    /* const newCustomer = {
      ...customer,
      date: new Date(),
    }; */
    dispatch(addImage(formData)); /* .then(() => {
      console.log(formData);

      resetField("fullname");
      resetField("accountNo");
      resetField("phone");
      resetField("ghanacard");
      resetField("dateOfBirth");
      resetField("image1");
      resetField("image2");
      resetField("image3");

      setFullname("");
      setAccountNo("");
      setGhanacard("");
      setPhone("");

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
    }); */

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 6500);
    });
  };
  /* const filterBySize = (file) => {
    return file.size <= 4096000;
  }; */
  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card md={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={sending1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Keep the following Steps
                    </Typography>
                    <Typography variant="body2">
                      1. Complete the form here<br></br>
                      2. Click on Submit to send your details<br></br>
                      Note: Image size for Ghanacard must not exceed 500kb
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item md={6}>
              <Div style={{ marginBottom: "10px" }}>
                Complete the form below to proceed
              </Div>
              <form
                encType="multipart/form-data"
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
                      className="form-control"
                      fullWidth
                      id="customerNames"
                      label="First name -- Other names -- Surname"
                      type={"text"}
                      autoFocus
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
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
                          pattern: {
                            value: /^[1-9]\d*(\d+)?$/i,
                            message: "Only numbers are accepted on this field",
                          },
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
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                    />
                    {errors.accountNo && (
                      <Alert variant="outlined" severity="error">
                        {errors.accountNo.message}
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
                      value={ghanacard}
                      onChange={(e) => setGhanacard(e.target.value)}
                    />
                    {errors.ghanacard && (
                      <Alert variant="outlined" severity="error">
                        {errors.ghanacard.message}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && (
                      <Alert variant="outlined" severity="error">
                        {errors.phone.message}
                      </Alert>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      {...register("dateOfBirth", {
                        required: "Select your Date of Birth",
                      })}
                      name="dateOfBirth"
                      id="date"
                      label="Date of birth"
                      type="date"
                      variant="outlined"
                      required
                      fullWidth
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={customer.date}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />

                    {errors.dateOfBirth && (
                      <Alert variant="outlined" severity="error">
                        {errors.dateOfBirth.message}
                      </Alert>
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
                          className="visually-hidden form-control-file"
                          onChange={(e) => {
                            handleImg(e);
                          }}
                          label="Upload"
                        />

                        <label
                          htmlFor="photo1"
                          className="form-img__file-label">
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
                            required:
                              "Select Back picture of your Ghana card here",
                          })}
                          name="image2"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          id="photo2"
                          className="visually-hidden form-control-file"
                          onChange={(e) => {
                            handleImg2(e);
                          }}
                          label="Upload"
                        />
                        <label
                          htmlFor="photo2"
                          className="form-img__file-label">
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
                        <input
                          {...register("image3", {
                            required: "Click here to Select or Take new Selfie",
                          })}
                          name="image3"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          id="photo3"
                          className="visually-hidden form-control-file"
                          onChange={(e) => {
                            handleImg3(e);
                          }}
                          label="Upload"
                        />
                        <label
                          htmlFor="photo3"
                          className="form-img__file-label">
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
                  type="submit"
                  endIcon={<SendIcon />}
                  loading={isSubmitting}
                  loadingPosition="end"
                  variant="contained">
                  Submit
                </LoadingButton>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default AddTodo;
