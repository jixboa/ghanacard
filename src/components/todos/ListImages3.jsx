import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
//import InputLabel from "@mui/material/InputLabel";
//import MenuItem from "@mui/material/MenuItem";
//import FormControl from "@mui/material/FormControl";
//import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

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

  const [custName, setCustName] = useState("");
  const [custSelfie, setCustSelfie] = useState("");
  const [custFrontImage, setCustFrontImage] = useState("");
  const [custBackImage, setCustBackImage] = useState("");

  const images = useSelector((state) => state.images);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = (rowData) => {
    setOpen(true);
    const custData = rowData;
    setCustName(custData[0]);
    setCustSelfie(custData[4].props.src);
    setCustFrontImage(custData[5].props.src);
    setCustBackImage(custData[6].props.src);

    console.log(custData);
  };

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
            variant="rounded"
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
            variant="rounded"
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"></Avatar>
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
            variant="rounded"
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"></Avatar>
        ),
        display: false,
      },
    },
  ];
  //const [muidata, setMuiData] = useState([]);

  const options = {
    search: true,
    download: true,
    print: true,
    filter: false,
    filterType: "dropdown",
    responsive: "standard",
    onTableChange: (action, state) => {
      state = { newImages };
    },
    onRowClick: (rowData) => {
      handleOpen(rowData);
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
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <label>
            <Avatar variant="rounded" src={custSelfie} alt="Alt"></Avatar>
          </label>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {custName}
          </Typography>
          <Box sx={{ width: 550, height: 150 }}>
            <ImageList
              variant="masonry"
              sx={{ width: 500, height: 450 }}
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
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ListImages3;
