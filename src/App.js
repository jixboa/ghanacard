import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authAction";
import { getImages } from "./store/actions/imageAction";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Todos from "./components/todos/Todos";
import ViewImages from "./components/todos/ViewImages";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navbar/NavBar";
import { makeStyles } from "@material-ui/styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/500.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <Container maxWidth="xl">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth="lg">
            <Routes>
              {/* <Route path='/home' element={<Homescreen/>} /> */}

              <Route path="/signin" exact element={<SignIn />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/" exact element={<Todos />} />
              <Route path="/viewimages" exact element={<ViewImages />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
