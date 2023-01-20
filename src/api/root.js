import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
export const IP_URL = "https://jix-todo-app.herokuapp.com/api";

const root = () => {
  return axios.create({
    baseURL: IP_URL,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "https://gapghanacard.netlify.app",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
export default root;
