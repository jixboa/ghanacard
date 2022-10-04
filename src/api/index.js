export const url = "localhost:5000/api";
//export const url = "https://jix-todo-app.herokuapp.com/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return header;
};
