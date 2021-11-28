import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500',
    headers: {
      "Content-type": "application/json",
    },
  });


