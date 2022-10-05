import { toast } from "react-toastify";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      toast.success(
        "Your Ghana Card details have been submitted Successfully",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return [action.image.data, ...state];

    case "GET_IMAGES":
      return action.images.data;

    default:
      return state;
  }
};

export default imageReducer;
