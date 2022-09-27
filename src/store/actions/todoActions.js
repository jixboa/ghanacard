//import axios from "axios"
import API from "../../api/root";
import { toast } from "react-toastify";
import { setHeaders } from "../../api";

export const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    API()
      .post("/items", newTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });

    /* API()
      .post("/completedtodos", newTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      }); */
  };
};

export const getTodos = () => {
  return (dispatch) => {
    API()
      .get("/items", setHeaders())
      .then((todos) => {
        dispatch({
          type: "GET_TODOS",
          todos,
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

export const updateTodo = (updatedTodo, id) => {
  return (dispatch) => {
    API()
      .put(`/items/${id}`, updatedTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "UPDATE_TODO",
          todo,
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

export const checkTodo = (id) => {
  return (dispatch) => {
    API()
      .patch(`/items/${id}`, {}, setHeaders())
      .then((todo) => {
        dispatch({
          type: "CHECK_TODO",
          todo,
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

export const deleteTodo = (id) => {
  return (dispatch) => {
    API()
      .delete(`/items/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
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
