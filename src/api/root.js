import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
export const IP_URL = "https://jix-todo-app.herokuapp.com/api";
export const AWS_IP =
  "http://ghcardserver-env.eba-kearpmr8.us-east-1.elasticbeanstalk.com/api";

const root = () => {
  return axios.create({
    baseURL: IP_URL,
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, Access-control-allow-headers, X-Requested-With, x-auth-token, Content-Type, Accept, Authorization, Access-Control-Allow-Origin,Access-Control-Allow-Methods",
    },
  });
};
export default root;
