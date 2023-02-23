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
      .post("/images", formData, setHeaders())
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

export const deleteImage = (id) => {
  return (dispatch) => {
    API()
      .delete(`/images/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_IMAGE",
          id,
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

export const editImage = (formData, id) => {
  return (dispatch) => {
    API()
      .put(`/images/${id}`, formData, setHeaders())
      .then((image) => {
        dispatch({
          type: "UPDATE_IMAGE",
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
