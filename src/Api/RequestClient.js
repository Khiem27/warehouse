import axios from "axios";
const RequestClient = axios.create({
  baseURL: "https://warehouse-6.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default RequestClient;
