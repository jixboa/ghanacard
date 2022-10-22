import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ListImages from "./ListImages";
//import ListImages3 from "./ListImages3";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { getImages } from "../../store/actions/imageAction";
//import { Typography } from "@material-ui/core";
import { Slide } from "react-awesome-reveal";

const ViewImages2 = (setMuiData) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  // const images = useSelector((state) => state.images);

  //const [image, setImage] = useState({});

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <>
      {loading ? (
        <div style={style}>
          <DotLoader color={"#31CFB1"} loading={loading} size={60} />
        </div>
      ) : (
        <>
          {/* <AddTodo todo={todo} setTodo={setTodo} /> */}
          {/* <ListTodos setTodo={setTodo} /> */}
          <Slide>
            <ListImages />
            {/* <ListImages3 /> */}
          </Slide>
        </>
      )}
    </>
  );
};

export default ViewImages2;
