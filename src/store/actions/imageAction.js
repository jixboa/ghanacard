//import axios from "axios"
import API from "../../api/root";
import { toast } from "react-toastify";
//import { setHeaders } from "../../api";

export const addImage = (customer) => {
  return (dispatch, getState) => {
    API()
      .post("/images", customer)
      .then((image) => {
        dispatch({
          type: "ADD_IMAGE",
          image,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
};

export const getImages = () => {
  return (dispatch) => {
    API()
      .get("/images")
      .then((images) => {
        dispatch({
          type: "GET_IMAGES",
          images,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
};
