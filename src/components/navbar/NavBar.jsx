import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authAction";
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
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    //signOut the user
    dispatch(signOut());
    console.log("signed Out");
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              <Typography>GAP Ghana Card Update</Typography>
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Button variant="text" color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  Admin
                </Link>
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => HandleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button variant="text" color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  Admin
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
};

export default NavBar;
