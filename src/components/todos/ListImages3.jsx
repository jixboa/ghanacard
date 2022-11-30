import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
//import InputLabel from "@mui/material/InputLabel";
//import MenuItem from "@mui/material/MenuItem";
//import FormControl from "@mui/material/FormControl";
//import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
//import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
//import { useEffect } from "react";

import * as React from "react";
import { Avatar } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
//import ImageListItemBar from "@mui/material/ImageListItemBar";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom } from "react-awesome-reveal";

import "@fontsource/roboto/400.css";

//import { FileSaver } from "file-saver";
//import * as htmlToImage from "html-to-image";
//import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
//const download = require("download");

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const ListImages3 = ({ setImage }) => {
  /*   const [responsive, setResponsive] = useState("standard");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true); */

  /*  const download = (url) => {
    const a = document.createElement("a");
    a.href = toDataURL(url);
    a.download = "myImage.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toDataURL = (url) => {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }; */

  const header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");
  header.append("Content-Type", "application/json");
  header.append("Access-Control-Allow-Origin", "*");
  header.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const downloadImage = () => {
    //saveAs(`${custSelfie}`, `image.jpeg`); // Put your image url here.
    //FileSaver.saveAs(`${custSelfie}`, "image.jpg");
    /* const xhr = new XMLHttpRequest();
    const url = `${custSelfie}`;
    xhr.open("GET", header, url);
    xhr.onreadystatechange = download;
    xhr.send(); */

    /* let printContents = document.getElementById("image-canvas").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; */

    var myCoolDiv = document.createElement("div");
    // Don't reall need this: myCoolDiv.id = "MyCoolDiv";

    document.getElementById("image-canvas").appendChild(myCoolDiv);
    window.print();

    // No need for this, we already have it from the above:
    // var myCoolDiv = document.getElementById("MyCoolDiv");
    document.getElementById("image-canvas").removeChild(myCoolDiv);
  };

  const [custName, setCustName] = useState("");
  const [custSelfie, setCustSelfie] = useState("");
  const [custFrontImage, setCustFrontImage] = useState("");
  const [custBackImage, setCustBackImage] = useState("");
  const [custGhanaCard, setCustGhanaCard] = useState("");
  //const [custDateOfBirth, setcustDateOfBirth] = useState("");
  const [custAccountNo, setcustAccountNo] = useState("");

  const images = useSelector((state) => state.images);

  const [open, setOpen] = useState(false);
  //const [openModal, setOpenModal] = useState(false);
  //const [zoomedImage, setZoomedImage] = useState("");
  const handleClose = () => setOpen(false);

  const handleOpen = (rowData) => {
    const custData = rowData;
    setCustName(custData[0]);
    setcustAccountNo(custData[1]);
    setCustGhanaCard(custData[2]);

    setCustSelfie(custData[4].props.src);
    setCustFrontImage(custData[5].props.src);
    setCustBackImage(custData[6].props.src);
    setOpen(true);

    //console.log(custData);
  };
  /* const zoomImage = (data) => {
    const newZoom = data;
    setZoomedImage(newZoom);
    setOpenModal(true);
  }; */

  const newImages = images.map((imagee) => [
    imagee.fullname,
    imagee.accountNo,
    imagee.ghanacard,
    imagee.date,
    imagee.image3,
    imagee.image1,
    imagee.image2,
  ]);

  const columns = [
    { name: "Customer Name", options: { filterOptions: { fullWidth: true } } },
    "Account number",
    "Ghana card",
    "Date Created",
    {
      name: "Avatar",
      label: "Selfie",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Avatar
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"></Avatar>
        ),
      },
    },
    {
      name: "Avatar1",
      label: "Front Image",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Avatar
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"
            variant="rounded"></Avatar>
        ),
        display: false,
      },
    },
    {
      name: "Avatar2",
      label: "Back Image",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Avatar
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"
            variant="rounded"></Avatar>
        ),
        display: false,
      },
    },
    /* {
      name: "Delete",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <button
              onClick={() => {
                const { data } = this.state;
                data.shift();
                this.setState({ data });
              }}>
              Delete
            </button>
          );
        },
      },
    }, */
  ];
  //const [muidata, setMuiData] = useState([]);

  const options = {
    search: true,
    download: true,
    print: true,
    filter: false,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    onTableChange: (action, state) => {
      state = { newImages };
    },
    onRowClick: (rowData) => {
      handleOpen(rowData);
    },
    onRowsDelete: (rowData) => {
      console.log(rowData);
    },
  };

  return (
    <>
      <CacheProvider value={muiCache} style={{ margintop: "20px" }}>
        <ThemeProvider theme={createTheme()}>
          {/*  <FormControl margintop={"20px"} hidden={true}>
            <InputLabel id="demo-simple-select-label">
              Responsive Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={responsive}
              style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setResponsive(e.target.value)}>
              <MenuItem value={"standard"}>standard</MenuItem>
              <MenuItem value={"vertical"}>vertical</MenuItem>
              <MenuItem value={"simple"}>simple</MenuItem>

              <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
              <MenuItem value={"scrollMaxHeight"}>
                scrollMaxHeight (deprecated)
              </MenuItem>
              <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchBtn}
              style={{ width: "200px", marginBottom: "10px" }}
              onChange={(e) => setSearchBtn(e.target.value)}>
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Download Button
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={downloadBtn}
              style={{ width: "200px", marginBottom: "10px" }}
              onChange={(e) => setDownloadBtn(e.target.value)}>
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={printBtn}
              style={{ width: "200px", marginBottom: "10px" }}
              onChange={(e) => setPrintBtn(e.target.value)}>
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Filter Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterBtn}
              style={{ width: "200px", marginBottom: "10px" }}
              onChange={(e) => setFilterBtn(e.target.value)}>
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl> */}
          <MUIDataTable
            title={"Ghana Card Details"}
            data={newImages}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
      <Modal
        keepMounted
        open={false}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Box sx={{ width: 550, height: 150 }}>
            <ImageList
              variant="masonry"
              sx={{ width: 500, height: 450 }}
              sm={{ width: 350, height: 450 }}
              cols={2}
              rowHeight={150}
              gap={8}>
              <ImageListItem>
                <img
                  src={`${custFrontImage}?w=248&fit=crop&auto=format`}
                  srcSet={`${custFrontImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={custName}
                />
              </ImageListItem>
            </ImageList>
          </Box>
        </Box>
      </Modal>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ justifyContent: "center", display: "flex" }}>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ width: 150, height: 80 }}
              avatar={
                <Avatar
                  alt="Natacha"
                  src={custSelfie}
                  style={{ width: "70px", height: "70px" }}
                />
              }
              variant="outlined"
            />
          </Stack>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
              alignItems: "center",
            }}>
            <div
              id="image-canvas"
              style={{
                justifyContent: "center",
                margin: "0 auto",
                alignItems: "center",
              }}>
              {/*  <Avatar
                align="center"
                alt="Image"
                src={custSelfie}
                style={{ width: "60px", height: "60px", marginLeft: "28px" }}
              /> */}

              <Typography
                align="center"
                variant="subtitle2"
                sx={{ fontWeight: "bold" }}>
                {custName}
              </Typography>
              <Typography align="center" variant="subtitle2">
                {custAccountNo}
              </Typography>
              <Typography align="center" variant="subtitle2">
                {custGhanaCard}
              </Typography>
              {/* <Button variant="outlined" size="small" align="center" onClick={setTextEditable}>
                Edit
              </Button> */}
            </div>
            <Zoom>
              <ImageList
                variant="masonry"
                /* sx={{ width: 500, height: 250 }}
              sm={{ width: 350, height: 250 }} */
                cols={2}
                rowHeight={150}
                gap={8}>
                <ImageListItem>
                  <img
                    src={`${custFrontImage}?w=248&fit=crop&auto=format`}
                    srcSet={`${custFrontImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={custName}
                  />
                  <img
                    src={`${custBackImage}?w=248&fit=crop&auto=format`}
                    srcSet={`${custBackImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={custName}
                  />
                </ImageListItem>
              </ImageList>
            </Zoom>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size="small" onClick={downloadImage}>
            Save Profile
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default ListImages3;
