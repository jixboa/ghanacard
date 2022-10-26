import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
export const IP_URL = "https://jix-todo-app.herokuapp.com/api";
export const TEST_URL = "https://api-test.maximnyansa.com/api/v1";

const root = () => {
  return axios.create({
    baseURL: IP_URL,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
};
export default root;
