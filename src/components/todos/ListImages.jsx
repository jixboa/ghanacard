//import ImageFile from "./ImageFile";
//import { makeStyles } from "@material-ui/styles";
//import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

/* const useStyle = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});
 */
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ListImages = ({ setImage }) => {
  //const classes = useStyle();
  const images = useSelector((state) => state.images);

  return (
    <>
      {/*  <div className={classes.todoStyle}>
        <Typography>
          {images.length > 0
            ? `${images.length} Records received`
            : "No Records yet"}
        </Typography>
        {images &&
          images.map((image) => {
            return (
              <ImageFile image={image} key={image._id} setImage={setImage} />
            );
          })}
      </div> */}
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer name</StyledTableCell>
              <StyledTableCell align="centre">Account Number</StyledTableCell>
              <StyledTableCell align="centre">Ghana Card</StyledTableCell>
              <StyledTableCell align="centre">Selfie</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {images.map((image) => (
              <StyledTableRow
                key={image._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <StyledTableCell component="th" scope="row">
                  {image.fullname}
                </StyledTableCell>
                <StyledTableCell align="centre">
                  {image.accountNo}
                </StyledTableCell>
                <StyledTableCell align="centre">
                  {image.ghanacard}
                </StyledTableCell>
                <StyledTableCell align="centre">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={image.image3} />
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListImages;
