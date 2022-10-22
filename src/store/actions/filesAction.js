//import axios from "axios"
import API from "../../api/root";
import { toast } from "react-toastify";
//import { setHeaders } from "../../api";

export const getFiles = (filename) => {
  return (dispatch) => {
    API()
      .get("/files")
      .then((files) => {
        dispatch({
          type: "GET_FILES",
          files,
        });
        console.log(files);
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
};

export const addFile = (formData) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    API()
      .post("/files/upload", formData)
      .then((file) => {
        dispatch({
          type: "ADD_FILE",
          file,
        });
        resolve(file);
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
