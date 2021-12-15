import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://f1-tg.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
