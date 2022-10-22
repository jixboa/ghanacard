import { toast } from "react-toastify";

const fileReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FILE":
      toast.success(
        "Your Ghana Card details have been submitted Successfully",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return [action.file.data, ...state];

    case "GET_FILES":
      return action.files.data;

    default:
      return state;
  }
};

export default fileReducer;
