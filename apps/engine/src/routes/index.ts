import Elysia from "elysia";
import apps from "./apps";
import { logger } from "../libs/logger";

const routes = new Elysia().use(apps).all("*", () => {
  logger.info("Invalid request");
  return {
    status: "failed",
    message: "Invalid request",
  };
});

export default routes;
