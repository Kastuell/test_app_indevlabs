import axios from "axios";

export const inst = axios.create({
  baseURL: "http://localhost:5003/api",
});
