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

    case "DELETE_IMAGE":
      toast.success("Data Was delete", {
        position: toast.POSITION.TOP_CENTER,
      });
      return state.filter((image) => image._id !== action.id);

    case "UPDATE_IMAGE":
      toast.success("Data Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      return state.map((image) =>
        image._id === action.image.data._id ? action.image.data : image
      );

    default:
      return state;
  }
};

export default imageReducer;
