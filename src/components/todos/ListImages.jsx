import ImageFile from "./ImageFile";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListImages = ({ setImage }) => {
  const classes = useStyle();
  const images = useSelector((state) => state.images);

  return (
    <>
      <div className={classes.todoStyle}>
        <Typography>
          {images.length > 0
            ? `${images.length} Records received`
            : "No Records yet"}
        </Typography>
        {images &&
          images.map((image) => {
            return (
              <ImageFile image={image} key={image._id} setImage={setImage} />
            );
          })}
      </div>
    </>
  );
};

export default ListImages;
