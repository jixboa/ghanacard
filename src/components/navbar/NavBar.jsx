import React from "react";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { signOut } from "../../store/actions/authAction";
import Button from "@mui/material/Button";

import { AppBar, Typography, Toolbar, makeStyles } from "@material-ui/core";
// import ReactDOM from "react-dom";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    margin: "0px auto",
  },
  appbarStyle: {
    background: "#20b113",
  },

  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
  a: {
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyle();
  //const auth = useSelector((state) => state.auth);

  // console.log(state)
  //const navigate = useNavigate();
  //const dispatch = useDispatch();

  return (
    <>
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>
          <Typography variant="h5" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              GAP Ghana Card Update
            </Link>
          </Typography>
          <Button variant="text" color="inherit">
            <Link className={classes.linkStyle} to="/signin">
              Admin
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
};

export default NavBar;
