import Todo from "./Todo";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/actions/todoActions";

const useStyle = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListTodos = ({ setTodo }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <div className={classes.todoStyle}>
        <Typography>
          {todos.length > 0 ? `Todos for ${auth.name}` : "No Todos yet"}
        </Typography>
        {todos &&
          todos.map((todo) => {
            return <Todo todo={todo} key={todo._id} setTodo={setTodo} />;
          })}
      </div>
    </>
  );
};

export default ListTodos;
