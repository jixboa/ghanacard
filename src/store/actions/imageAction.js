//import axios from "axios"
import API from "../../api/root";
import { toast } from "react-toastify";
import { setHeaders } from "../../api";

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

export const addImage = (formData) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    API()
      .post("/images", formData)
      .then((image) => {
        dispatch({
          type: "ADD_IMAGE",
          image,
        });
        resolve(image);
      })
      .catch((error) => {
        const errors = error.response?.data;
        console.log(errors);
        reject(errors);
        toast.error(errors, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  });
