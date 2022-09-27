//import axios from "axios"
import API from "../../api/root";
import { toast } from "react-toastify";
import { setHeaders } from "../../api";

export const addImage = (customer) => {
  console.log(customer.image1);
  return (dispatch, getState) => {
    API()
      .post("/images", customer, setHeaders())
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
      .get("/images", setHeaders())
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
