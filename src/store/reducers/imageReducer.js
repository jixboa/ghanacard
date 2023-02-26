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
      const { ids } = action.payload;
      const remainingImages = state.filter((image) => !ids.includes(image._id));
      toast.success("Images Deleted Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      return remainingImages;

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
