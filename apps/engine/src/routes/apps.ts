import { Elysia } from "elysia";
import { logger } from "../libs/logger";

const apps = new Elysia({ prefix: "/apps" }).get("/", () => {
  logger.info("Getting registered apps");
  return [
    {
      id: "1212",
      name: "App 1",
      cwd: "/path/to/app1",
      command: "bun run src/index.ts",
    },
    {
      id: "2121",
      name: "App 2",
      cwd: "/path/to/app2",
      command: "bun run src/index.ts",
    },
  ];
});

export default apps;
