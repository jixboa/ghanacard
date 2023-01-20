import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
export const IP_URL = "https://jix-todo-app.herokuapp.com/api";

const root = () => {
  return axios.create({
    baseURL: IP_URL,
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "https://gapghanacard.netlify.app",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST, GET, OPTION, DELETE, PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
};
export default root;
