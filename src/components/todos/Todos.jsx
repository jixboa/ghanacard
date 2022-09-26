import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
//import ListTodos from "./ListTodos";
import ListImages from "./ListImages";
import { useSelector } from "react-redux";
//import { Navigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
//import { Typography } from "@material-ui/core";

const Todos = () => {
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

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
    author: auth.name,
    uid: auth._id,
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PropagateLoader color={"#31CFB1"} loading={loading} size={15} />
      ) : (
        <>
          <AddTodo todo={todo} setTodo={setTodo} />
          {/* <ListTodos setTodo={setTodo} /> */}
          <ListImages image={image} setImage={setImage} />
        </>
      )}
    </>
  );
};

export default Todos;
