import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import fileReducer from "./fileReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
  images: imageReducer,
  errors: errorReducer,
  files: fileReducer,
});

export default rootReducer;
