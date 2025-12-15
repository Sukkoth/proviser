import baseAxios from "axios";

const axios = baseAxios.create({
  socketPath: process.env.SOCKET_PATH,
});

export default axios;
