import Elysia from "elysia";
import apps from "./apps";

const routes = new Elysia().use(apps).all("*", () => {
  console.log({ message: "Invalid request" });
  return {
    status: "failed",
    message: "Invalid request",
  };
});

export default routes;
