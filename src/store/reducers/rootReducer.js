import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
  images: imageReducer,
});

export default rootReducer;
