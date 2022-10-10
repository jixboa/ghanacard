import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

import * as React from "react";
import { useState } from "react";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const ListImages2 = ({ setImage }) => {
  const [responsive, setResponsive] = useState("standard");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Customer Name", options: { filterOptions: { fullWidth: true } } },
    "Account number",
    "Ghana card",
    "Selfie",
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
  };

  const images = useSelector((state) => state.images);

  //const [muidata, setMuiData] = useState([]);

  /*   useEffect(() => {
    setMuiData(images);
  }, []); */

  const rows = useMemo(
    () => images.map((row, index) => ({ ...row, id: row._id })),
    [images]
  );

  return (
    <>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <FormControl>
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
          </FormControl>
          <MUIDataTable
            title={"ACME Employee list"}
            data={rows}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default ListImages2;
