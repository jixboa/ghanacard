//export const url = "localhost:5000/api";
//export const url = "https://jix-todo-app.herokuapp.com/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
    },
  };
  return header;
};

export const setHeader = () => {
  const header = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST, GET, OPTION, DELETE, PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  };
  return header;
};
