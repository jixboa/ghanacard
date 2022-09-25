import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [action.image.data, ...state];

    case "ADD_TODO":
      toast.success(`${action.todo.data.name} todo Added Successfully`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return [action.todo.data, ...state];

    case "GET_TODOS":
      return action.todos.data;

    case "UPDATE_TODO":
      toast.success("Todo Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );

    case "CHECK_TODO":
      toast.success(action.todo.data.name + " status Modified", {
        position: toast.POSITION.TOP_CENTER,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );

    case "DELETE_TODO":
      toast.success("Todo Was delete", {
        position: toast.POSITION.TOP_CENTER,
      });
      return state.filter((todo) => todo._id !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
