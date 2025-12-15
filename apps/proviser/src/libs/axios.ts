import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: "http://localhost",
  socketPath: process.env.SOCKET_PATH,
});

export default axios;
