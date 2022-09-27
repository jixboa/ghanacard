import React, { useState, useEffect } from "react";
import ListImages from "./ListImages";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getImages } from "../../store/actions/imageAction";
//import { Typography } from "@material-ui/core";

const ViewImages = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const images = useSelector((state) => state.images);

  const [image, setImage] = useState({
    fullname: images.fullname,
    dateOfBirth: images.dateOfBirth,
    ghanacard: images.ghanacard,
    image1: images.image1,
    image2: images.image2,
    image3: images.image3,
  });

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <>
      {loading ? (
        <PropagateLoader color={"#31CFB1"} loading={loading} size={15} />
      ) : (
        <>
          {/* <AddTodo todo={todo} setTodo={setTodo} /> */}
          {/* <ListTodos setTodo={setTodo} /> */}
          <ListImages image={image} setImage={setImage} />
        </>
      )}
    </>
  );
};

export default ViewImages;
