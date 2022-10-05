//import React, { useState, useEffect } from "react";
import ListImages from "./ListImages";
//import ListImages3 from "./ListImages3";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//import PropagateLoader from "react-spinners/PropagateLoader";
// import { getImages } from "../../store/actions/imageAction";
//import { Typography } from "@material-ui/core";
import { Slide } from "react-awesome-reveal";

const ViewImages2 = (setMuiData) => {
  //const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  // const images = useSelector((state) => state.images);

  //const [image, setImage] = useState({});

  /*  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []); */

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <>
      {/*  {loading ? (
        <PropagateLoader color={"#31CFB1"} loading={loading} size={15} />
      ) : (
        <> */}
      {/* <AddTodo todo={todo} setTodo={setTodo} /> */}
      {/* <ListTodos setTodo={setTodo} /> */}
      <Slide>
        <ListImages />
        {/* <ListImages3 /> */}
      </Slide>
    </>
    /*   )}
    </> */
  );
};

export default ViewImages2;
