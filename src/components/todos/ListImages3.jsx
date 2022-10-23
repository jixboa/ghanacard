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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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

  const images = useSelector((state) => state.images);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = (rowData) => {
    setOpen(true);
    const custData = rowData;
    console.log(custData);
  };

  const newImages = images.map((imagee) => [
    imagee.fullname,
    imagee.accountNo,
    imagee.ghanacard,
    imagee.date,
    imagee.image3,
  ]);

  const columns = [
    { name: "Customer Name", options: { filterOptions: { fullWidth: true } } },
    "Account number",
    "Ghana card",
    "Date Created",
    {
      name: "Avatar",
      label: "Image",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Avatar
            variant="rounded"
            src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${value}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
            alt="Alt"></Avatar>
        ),
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
            title={"GAP CUSTOMER DETAILS(GAHANA CARD)"}
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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Customer Details
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Ghana card images here
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ListImages3;
