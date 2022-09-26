import React from "react";

import { Typography } from "@material-ui/core";
//import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
//import moment from "moment";
//import { useDispatch } from "react-redux";

//import { checkTodo, deleteTodo } from "../../store/actions/todoActions";

const useStyle = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  grayStyle: {
    color: "#8f8f8f",
  },
});

const ImageFile = ({ image, setImage }) => {
  const classes = useStyle();
  //const dispatch = useDispatch();

  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          <Typography variant="body2" className={classes.grayStyle}>
            Name: {image.fullname}
          </Typography>
          <Typography>{image.ghanacard}</Typography>
          <Typography>{image.accountNo}</Typography>
          <Typography variant="body2" className={classes.grayStyle}>
            Date of Birth:{image.dateOfBirth}
          </Typography>
          <img src={image.image1} alt="View" width={80} />
          <img src={image.image2} alt="View" width={80} />
          <img src={image.image3} alt="View" width={80} />
        </div>
      </div>
    </>
  );
};

export default ImageFile;
