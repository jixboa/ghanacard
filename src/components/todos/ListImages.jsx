//import ImageFile from "./ImageFile";
//import { makeStyles } from "@material-ui/styles";
//import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState } from "react";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
//import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import TableFooter from "@mui/material/TableFooter";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";

import SearchBar from "material-ui-search-bar";
import Modal from "@mui/material/Modal";

import { styled } from "@mui/material/styles";

//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//import newImg from "../../../../routes/api/files";

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

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const ListImages = ({ setImage }) => {
  //const classes = useStyle();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [searched, setSearched] = useState("");

  const images = useSelector((state) => state.images);
  const files = useSelector((state) => state.files);

  const handleOpen = (oneID) => {
    setOpen(true);
    const personId = oneID;
    console.log(personId);
  };

  const [rows, setRows] = useState(images);

  const requestSearch = (searchedVal = { String }) => {
    const filteredRows = images.filter((row) => {
      return row.fullname.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - files.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  /*  const handleImages = (id) => {
    dispatch(deleteTodo(id));
  }; */

  return (
    <>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer name</StyledTableCell>
              <StyledTableCell align="center">Account Number</StyledTableCell>
              <StyledTableCell align="center">Ghana Card</StyledTableCell>
              <StyledTableCell align="left">Selfie</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((image) => (
              <StyledTableRow
                key={image._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <StyledTableCell component="th" scope="row">
                  {image.fullname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {image.accountNo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {image.ghanacard}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Avatar
                    onClick={() => handleOpen(image._id)}
                    alt="Remy Sharp"
                    src={`https://firebasestorage.googleapis.com/v0/b/mycard-uploads.appspot.com/o/${image.image3}?alt=media&token=86a1e483-8966-4f5c-8ff0-e45972e3c12b`}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 15, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={images.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

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

export default ListImages;
