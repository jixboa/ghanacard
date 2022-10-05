import React, { useState } from "react";
import AddTodo from "./AddTodo";
//import { useSelector } from "react-redux";
//import { Navigate } from "react-router-dom";
//import PropagateLoader from "react-spinners/PropagateLoader";
//import { Typography } from "@material-ui/core";

import { Fade } from "react-awesome-reveal";

const Todos = () => {
  //const auth = useSelector((state) => state.auth);

  const [customer, setCustomer] = useState({
    fullname: "",
    accountNo: "",
    phone: "",
    ghanacard: "",
    dateOfBirth: "",
    image1: "",
    image2: "",
    image3: "",
  });

  /*  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []); */

  return (
    /*  <>
      {loading ? (
        <PropagateLoader color={"#31CFB1"} loading={loading} size={15} />
      ) : ( */
    <>
      <Fade delay={600}>
        <AddTodo customer={customer} setCustomer={setCustomer} />
      </Fade>
    </>
    /*  )}
    </> */
  );
};

export default Todos;
